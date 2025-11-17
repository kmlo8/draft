'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { likesAPI } from '@/lib/api';

type Props = {
  movieId: string;
  initiallyLiked?: boolean;
};

export default function MovieActions({ movieId, initiallyLiked = false }: Props) {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const [liked, setLiked] = useState<boolean>(initiallyLiked);
  const [pending, setPending] = useState<boolean>(false);

  const handleBack = () => {
    window.history.back();
  };

  const toggleLike = async () => {
    if (!isAuthenticated) {
      router.push('/login');
      return;
    }

    if (pending) return;
    setPending(true);
    try {
      if (!liked) {
        console.log('Frontend: Liking Movie. Type: Movie, ID:', movieId);
        await likesAPI.create('Movie', movieId);
        setLiked(true);
      } else {
        console.log('Frontend: Unliking Movie. Type: Movie, ID:', movieId);
        await likesAPI.deleteByTarget('Movie', movieId);
        setLiked(false);
      }
    } catch (e) {
      console.error('Frontend: Error toggling like:', e);
      // ignore errors for now
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={handleBack}
        className="px-3 py-2 rounded-lg transition text-sm btn-neutral"
      >
        뒤로가기
      </button>

      <button
        onClick={toggleLike}
        disabled={pending}
        className={`px-3 py-2 rounded-lg transition text-sm flex items-center gap-2 ${
          liked ? 'bg-red-600 hover:bg-red-700 text-white' : 'btn-neutral'
        } disabled:opacity-50`}
        aria-pressed={liked}
      >
        {/* Heart icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={liked ? 'currentColor' : 'none'}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.737-.715-1.611-2.377-2.737-4.313-2.737C5.099 3.75 3 5.765 3 8.25c0 7.125 9 12 9 12s9-4.875 9-12z"
          />
        </svg>
        {liked ? '좋아요 취소' : '좋아요'}
      </button>
    </div>
  );
}
