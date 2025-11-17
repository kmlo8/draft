'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { userAPI } from '@/lib/api';
import { useTheme } from '@/context/ThemeContext';
import Header from '@/components/Header';
import MoviePosterOverlay from '@/components/MoviePosterOverlay';

interface UserStats {
  moviesLiked: number;
  actorsLiked: number;
  directorsLiked: number;
}

export default function UserPage() {
  const router = useRouter();
  const { isAuthenticated, user, logout } = useAuth();
  const { darkMode, toggleDarkMode } = useTheme();
  const [activeTab, setActiveTab] = useState<'영화' | '감독' | '배우'>('영화');
  const [stats, setStats] = useState<UserStats>({
    moviesLiked: 0,
    actorsLiked: 0,
    directorsLiked: 0
  });
  const [likedMovies, setLikedMovies] = useState<any[]>([]);
  const [likedActors, setLikedActors] = useState<any[]>([]);
  const [likedDirectors, setLikedDirectors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const loadUserData = useCallback(async () => {
    if (!isAuthenticated) return;
    try {
      setLoading(true);
      const [statsRes, moviesRes, actorsRes, directorsRes] = await Promise.all([
        userAPI.getStats(),
        userAPI.getLikedMovies(),
        userAPI.getLikedActors(),
        userAPI.getLikedDirectors(),
      ]);
      const s = statsRes.data?.stats || {};
      setStats({
        moviesLiked: s.likedMoviesCount ?? 0,
        actorsLiked: s.likedActorsCount ?? 0,
        directorsLiked: s.likedDirectorsCount ?? 0,
      });
      setLikedMovies(moviesRes.data.movies || []);
      setLikedActors(actorsRes.data.actors || []);
      setLikedDirectors(directorsRes.data.directors || []);
    } catch (error) {
      console.error('Failed to load user data:', error);
    } finally {
      setLoading(false);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    } else {
      loadUserData();
    }
  }, [isAuthenticated, router, loadUserData]);

  const handleLikeChange = () => {
    // Re-fetch all user data after a short delay
    setTimeout(() => {
      loadUserData();
    }, 300);
  };

  const handleLogout = async () => {
    await logout();
    router.push('/');
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="mb-12">
          <div className="flex items-center justify-end gap-3 mb-4">
            <button
              onClick={() => {
                sessionStorage.setItem('questionnaire_from_mypage', 'true');
                router.push('/questionnaire');
              }}
              className="px-4 py-2 rounded-full border border-gray-700 bg-gray-900 text-sm hover:bg-gray-800 transition"
            >
              취향 설정 변경
            </button>
            <button
              onClick={toggleDarkMode}
              className="px-4 py-2 rounded-full border border-gray-700 bg-gray-900 text-sm hover:bg-gray-800 transition"
              aria-pressed={darkMode}
            >
              {darkMode ? '라이트 모드' : '다크 모드'}
            </button>
          </div>
          <div className="flex items-center gap-6 mb-8">
            <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-2">마이페이지</h1>
              <p className="text-gray-400">좋아요한 영화, 감독, 배우를 관리하세요</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 text-center">
              <div className="text-3xl font-bold mb-1">{stats.moviesLiked}</div>
              <div className="text-gray-400 text-sm">좋아요한 영화</div>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 text-center">
              <div className="text-3xl font-bold mb-1">{stats.actorsLiked}</div>
              <div className="text-gray-400 text-sm">좋아요한 배우</div>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 text-center">
              <div className="text-3xl font-bold mb-1">{stats.directorsLiked}</div>
              <div className="text-gray-400 text-sm">좋아요한 감독</div>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mb-8 border-b border-gray-800">
          {['영화', '감독', '배우'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-4 py-2 transition ${activeTab === tab ? 'text-white border-b-2 border-red-500' : 'text-gray-400 hover:text-white'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-16"><p className="text-gray-400">로딩 중...</p></div>
        ) : (
          <>
            {activeTab === '영화' && (
              likedMovies.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {likedMovies.map((movie) => (
                    <div key={movie.id} onClick={() => router.push(`/movie/${movie.id}`)} className="cursor-pointer group">
                      <div className="relative aspect-[2/3] bg-gray-800 rounded-lg overflow-hidden mb-3 hover:ring-2 hover:ring-red-500 transition">
                        <img src={movie.posterUrl || ''} alt={movie.title} className="w-full h-full object-cover" />
                        <MoviePosterOverlay movieId={movie.id} rating={movie.rating} initiallyLiked={true} onLikeChange={handleLikeChange} />
                      </div>
                      <h3 className="font-medium line-clamp-2">{movie.title}</h3>
                      <p className="text-sm text-gray-400">{movie.year}</p>
                    </div>
                  ))}
                </div>
              ) : <div className="text-center py-16"><p className="text-gray-400">아직 좋아요한 영화가 없습니다</p></div>
            )}
            {activeTab === '감독' && (
              likedDirectors.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {likedDirectors.map((d) => (
                    <div key={d.id} className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                      <div className="aspect-[2/3] bg-gray-800 rounded-lg overflow-hidden mb-3 flex items-center justify-center">
                        <img src={d.profileUrl || ''} alt={d.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="line-clamp-2 font-medium">{d.name}</div>
                    </div>
                  ))}
                </div>
              ) : <div className="text-center py-16"><p className="text-gray-400">아직 좋아요한 감독이 없습니다</p></div>
            )}
            {activeTab === '배우' && (
              likedActors.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {likedActors.map((a) => (
                    <div key={a.id} className="bg-gray-900 rounded-lg p-4 border border-gray-800 cursor-pointer" onClick={() => router.push(`/actor/${a.id}`)}>
                      <div className="aspect-[2/3] bg-gray-800 rounded-lg overflow-hidden mb-3 flex items-center justify-center">
                        <img src={a.profileUrl || ''} alt={a.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="line-clamp-2 font-medium">{a.name}</div>
                    </div>
                  ))}
                </div>
              ) : <div className="text-center py-16"><p className="text-gray-400">아직 좋아요한 배우가 없습니다</p></div>
            )}
          </>
        )}

        <div className="mt-12 text-center">
          <button onClick={handleLogout} className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition">로그아웃</button>
        </div>
      </div>
    </div>
  );
}
