import Link from 'next/link';
import MoviePosterOverlay from './MoviePosterOverlay';

type Movie = {
  id: string;
  title: string;
  year: number;
  posterUrl: string;
};

type Props = {
  movie: Movie;
};

export default function MoviePoster({ movie }: Props) {
  return (
    <Link href={`/movie/${movie.id}`} className="block group relative">
      <div className="aspect-[2/3] w-full bg-gray-800 rounded-lg overflow-hidden">
        {movie.posterUrl && (
          <img
            src={movie.posterUrl}
            alt={movie.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        )}
      </div>
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
      <MoviePosterOverlay movieId={movie.id} />
      <div className="mt-2 text-sm">
        <h3 className="font-semibold text-white truncate">{movie.title}</h3>
        <p className="text-gray-400">{movie.year}</p>
      </div>
    </Link>
  );
}
