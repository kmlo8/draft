'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
import { recommendationsAPI, userAPI, moviesAPI } from '@/lib/api';
import Header from '@/components/Header';
import Carousel from '@/components/Carousel';
import { AxiosError } from 'axios';

interface Movie {
  id: number;
  title: string;
  year: string;
  posterUrl?: string;
  rating?: number;
  userLiked?: boolean;
  genres?: string[];
}

interface Section {
  title: string;
  movies: Movie[];
  originalTitle?: string;
}

const genreMapToKorean: Record<string, string> = {
  'Action': '액션', 'Drama': '드라마', 'Comedy': '코미디', 'Romance': '로맨스',
  'Thriller': '스릴러', 'Horror': '공포', 'Science Fiction': 'SF', 'Fantasy': '판타지',
  'Animation': '애니메이션', 'Documentary': '다큐멘터리', 'Crime': '범죄', 'Family': '가족'
};

export default function HomePage() {
  const router = useRouter();
  const { user, isAuthenticated } = useAuth();

  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [searchError, setSearchError] = useState('');

  const [newMovies, setNewMovies] = useState<Movie[]>([]);

  // Split state to manage loading independently
  const [userGenreSections, setUserGenreSections] = useState<Section[]>([]);
  const [otherGenreSections, setOtherGenreSections] = useState<Section[]>([]);

  const [loadingNewMovies, setLoadingNewMovies] = useState(false);
  const [loadingUserGenres, setLoadingUserGenres] = useState(false);
  const [loadingOtherGenres, setLoadingOtherGenres] = useState(false);

  // Helper to map API response to Korean titles
  const mapToKorean = useCallback((section: Section) => ({
    ...section,
    title: genreMapToKorean[section.title] || section.title,
    originalTitle: section.title
  }), []);

  const loadNewMovies = useCallback(async () => {
    setLoadingNewMovies(true);
    try {
      const response = await moviesAPI.getNew(20);
      setNewMovies(response.data.movies || []);
    } catch (err) {
      console.error('Failed to load new movies:', err);
      setNewMovies([]);
    } finally {
      setLoadingNewMovies(false);
    }
  }, []);

  const loadGenreMovies = useCallback(async () => {
    // 1. Identify Genres
    const allGenres = Object.keys(genreMapToKorean);
    const userGenres = (isAuthenticated && user?.preferredGenres) ? user.preferredGenres : [];
    const restGenres = allGenres.filter(g => !userGenres.includes(g));

    // --- PHASE 1: Load User Genres (High Priority) ---
    setLoadingUserGenres(true);
    if (userGenres.length > 0) {
      try {
        const response = await moviesAPI.getByGenres(userGenres);
        const sections = response.data.sections || [];
        setUserGenreSections(sections.map(mapToKorean));
      } catch (err) {
        console.error('Failed to load user genre movies:', err);
        setUserGenreSections([]);
      }
    } else {
      setUserGenreSections([]);
    }
    setLoadingUserGenres(false);

    // --- PHASE 2: Load Remaining Genres (Low Priority) ---
    setLoadingOtherGenres(true);
    if (restGenres.length > 0) {
      try {
        const response = await moviesAPI.getByGenres(restGenres);
        const sections = response.data.sections || [];
        setOtherGenreSections(sections.map(mapToKorean));
      } catch (err) {
        console.error('Failed to load other genre movies:', err);
        setOtherGenreSections([]);
      }
    } else {
      setOtherGenreSections([]);
    }
    setLoadingOtherGenres(false);

  }, [isAuthenticated, user?.preferredGenres, mapToKorean]);

  useEffect(() => {
    void loadNewMovies();
    void loadGenreMovies();
  }, [loadNewMovies, loadGenreMovies]);

  const handleLikeChange = () => {
    // Optional: Refresh logic
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAuthenticated) {
      router.push('/login');
      return;
    }
    if (!query.trim()) return;

    setLoadingSearch(true);
    setSearchError('');
    setHasSearched(true);
    try {
      const profileRes = await userAPI.getProfile();
      const userPrefs = profileRes.data?.user ? {
        genres: profileRes.data.user.preferredGenres || [],
        actors: profileRes.data.user.preferredActors || [],
        years: profileRes.data.user.preferredYears || { min: 1990, max: 2024 }
      } : {};
      const response = await recommendationsAPI.search(query, userPrefs);
      setSearchResults(response.data.movies || []);
    } catch (err: unknown) {
      if (err instanceof AxiosError && err.response?.status === 503) {
        setSearchError('추천 서비스를 사용할 수 없습니다.');
      } else {
        setSearchError('검색에 실패했습니다.');
      }
      setSearchResults([]);
    } finally {
      setLoadingSearch(false);
      setQuery('');
    }
  };

  return (
      <div className="min-h-screen bg-black text-white">
        <Header />
        <section id="search" className="relative min-h-[70vh] flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black"></div>
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
          <div className="container mx-auto px-4 py-32 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                {isAuthenticated && user?.name ? `${user.name}님` : '당신'}을 위한 완벽한 영화를 찾아드립니다
              </h1>
              <p className="text-xl text-gray-300 mb-12">지금 보고 싶은 영화를 검색해보세요</p>
              <form onSubmit={handleSearch} className="flex gap-4">
                <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="예: 우주를 배경으로 한 감동적인 영화" className="flex-1 px-6 py-4 bg-gray-800/50 backdrop-blur border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-lg" />
                <button type="submit" disabled={loadingSearch} className="px-8 py-4 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition disabled:opacity-50">{loadingSearch ? '검색 중...' : '추천받기'}</button>
              </form>
              {searchError && <div className="mt-4 bg-red-500/10 border border-red-500 text-red-500 px-4 py-2 rounded">{searchError}</div>}
            </div>
          </div>
        </section>

        {hasSearched && (
            <section className="container mx-auto px-4 py-16 -mt-20 relative z-10">
              <h2 className="text-3xl font-bold mb-8">검색 결과</h2>
              {loadingSearch ? (
                  <div className="text-center py-16"><p className="text-gray-400">추천 영화를 불러오는 중...</p></div>
              ) : searchResults.length > 0 ? (
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {searchResults.map((movie) => (
                        <div key={movie.id} onClick={() => router.push(`/movie/${movie.id}`)} className="cursor-pointer">
                          <div className="relative aspect-[2/3] bg-gray-800 rounded-lg overflow-hidden mb-3 hover:ring-2 hover:ring-red-500 transition">
                            {movie.posterUrl ? <Image src={movie.posterUrl} alt={movie.title} width={180} height={270} className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center text-gray-500">No Image</div>}
                          </div>
                          <h3 className="font-medium line-clamp-2">{movie.title}</h3>
                          <p className="text-sm text-gray-400">{movie.year}</p>
                        </div>
                    ))}
                  </div>
              ) : (
                  <div className="text-center py-16"><p className="text-gray-400 text-lg">추천 영화를 찾을 수 없습니다</p></div>
              )}
            </section>
        )}

        <div className={`pb-16 relative z-10 ${hasSearched ? 'pt-8' : '-mt-20'}`}>
          {/* 1. New Movies */}
          <Carousel title="새로운 영화" movies={newMovies} loading={loadingNewMovies} onLikeChange={handleLikeChange} />

          {/* 2. User Preferred Genres */}
          {userGenreSections.map(section => (
              <Carousel
                  key={`user-genre-${section.originalTitle}`}
                  title={section.title}
                  movies={section.movies}
                  loading={loadingUserGenres}
                  onLikeChange={handleLikeChange}
              />
          ))}

          {/* 3. Other Genres */}
          {otherGenreSections.map(section => (
              <Carousel
                  key={`other-genre-${section.originalTitle}`}
                  title={section.title}
                  movies={section.movies}
                  loading={loadingOtherGenres}
                  onLikeChange={handleLikeChange}
              />
          ))}

          {!isAuthenticated && !loadingUserGenres && !loadingOtherGenres && userGenreSections.length === 0 && otherGenreSections.length === 0 && (
              <div className="container mx-auto px-4 py-8 text-center text-gray-400">
                <p>로그인하시면 맞춤형 추천을 해드립니다.</p>
              </div>
          )}
        </div>
      </div>
  );
}