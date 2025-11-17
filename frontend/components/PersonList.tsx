'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { likesAPI } from '@/lib/api';

type ActorItem = {
  actorId: string;
  actorName: string;
  character?: string | null;
};

type DirectorItem = {
  directorId: string;
  directorName: string;
};

type Props = {
  type: 'Actor' | 'Director';
  items: ActorItem[] | DirectorItem[];
};

export default function PersonList({ type, items }: Props) {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const [likedMap, setLikedMap] = useState<Record<string, boolean>>({});
  const [loadingIds, setLoadingIds] = useState<Record<string, boolean>>({});

  const normalized = useMemo(
    () =>
      (items || [])
        .map((it: any) =>
          type === 'Actor'
            ? { id: String(it.actorId), name: it.actorName, sub: it.character ?? null }
            : { id: String(it.directorId), name: it.directorName, sub: null }
        )
        .filter(item => item.id && item.id !== 'undefined'), // Filter out invalid items
    [items, type]
  );

  useEffect(() => {
    if (!isAuthenticated || normalized.length === 0) return;

    const validItems = normalized.filter(n => n.id);
    if (validItems.length === 0) return;

    const payload = validItems.map((n) => ({ type, id: n.id }));
    
    likesAPI
      .check(payload)
      .then((res) => {
        const map: Record<string, boolean> = {};
        const liked = res.data?.liked || {};
        for (const n of validItems) {
          map[n.id] = Boolean(liked[`${type}_${n.id}`]);
        }
        setLikedMap(map);
      })
      .catch(() => {});
  }, [isAuthenticated, normalized, type]);

  const toggle = async (id: string) => {
    if (!isAuthenticated) {
      router.push('/login');
      return;
    }
    if (loadingIds[id]) return;
    setLoadingIds((s) => ({ ...s, [id]: true }));
    try {
      const isLiked = likedMap[id];
      if (isLiked) {
        console.log(`Frontend: Unliking ${type}. Type: ${type}, ID:`, id);
        await likesAPI.deleteByTarget(type, id);
      } else {
        console.log(`Frontend: Liking ${type}. Type: ${type}, ID:`, id);
        await likesAPI.create(type, id);
      }
      setLikedMap((s) => ({ ...s, [id]: !isLiked }));
    } catch (e) {
      console.error('Frontend: Error toggling like:', e);
      // ignore
    } finally {
      setLoadingIds((s) => ({ ...s, [id]: false }));
    }
  };

  return (
    <div className="divide-y divide-white/10 rounded-lg overflow-hidden bg-white/5">
      {normalized.map((n) => (
        <div key={n.id} className="flex items-center justify-between px-4 py-3">
          <Link href={type === 'Actor' ? `/actor/${n.id}` : `/director/${n.id}`} className="min-w-0">
            <div className="font-medium text-gray-100 truncate" title={n.name}>
              {n.name}
            </div>
            {n.sub ? (
              <div className="text-sm text-gray-400 truncate" title={n.sub}>
                {n.sub}
              </div>
            ) : null}
          </Link>
          <button
            onClick={() => toggle(n.id)}
            disabled={Boolean(loadingIds[n.id])}
            className={`px-3 py-1.5 rounded-md text-sm flex items-center gap-2 transition ${
              likedMap[n.id] ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-white/10 hover:bg-white/20'
            } disabled:opacity-50`}
            aria-pressed={likedMap[n.id]}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={likedMap[n.id] ? 'currentColor' : 'none'}
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
            {likedMap[n.id] ? '좋아요 취소' : '좋아요'}
          </button>
        </div>
      ))}
    </div>
  );
}
