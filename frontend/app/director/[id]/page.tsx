'use client';

import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import { directorsAPI } from '@/lib/api';
import Loading from '@/components/Loading';
import Error from '@/components/Error';
import MoviePoster from '@/components/MoviePoster';

type Director = {
  id: string;
  name: string;
  nameEnglish: string;
  profileUrl: string;
  movies: Movie[];
};

type Movie = {
  id: string;
  title: string;
  year: number;
  posterUrl: string;
};

type Props = {
  params: { id: string };
};

export default function DirectorPage({ params: { id } }: Props) {
  const [director, setDirector] = useState<Director | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDirector = async () => {
      try {
        const directorData = await directorsAPI.getById(id);
        setDirector(directorData);
      } catch (err) {
        if (err.response?.status === 404) {
          notFound();
        } else {
          setError('Failed to fetch director data.');
        }
      } finally {
        setLoading(false);
      }
    };
    fetchDirector();
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;
  if (!director) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-60 lg:w-72 flex-shrink-0">
          <div className="aspect-[2/3] rounded-lg overflow-hidden ring-1 ring-white/10 bg-gray-900">
            {director.profileUrl ? (
              <img src={director.profileUrl} alt={director.name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-500">No Image</div>
            )}
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">{director.name}</h1>
          <p className="mb-4 text-lg text-gray-400">{director.nameEnglish}</p>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Movies</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {director.movies.map((movie) => (
            <MoviePoster key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}
