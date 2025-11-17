// typescript
import { notFound } from 'next/navigation';
import MovieActions from '@/components/MovieActions';
import PersonList from '@/components/PersonList';

type Props = {
    params: Promise<{ id: string }> | { id: string };
};

export default async function MoviePage(props: Props) {
    const { id } = await props.params;

    const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';
    const res = await fetch(`${API_BASE}/api/movies/${id}`, { cache: 'no-store' });

    if (res.status === 404) return notFound();
    if (!res.ok) {
        const body = await res.text().catch(() => '');
        throw new Error(`Failed to fetch movie ${id}: ${res.status} ${body}`);
    }

    const data = await res.json();
    const movie = data.movie;

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Backdrop hero */}
            <div
                className="relative w-full h-[40vh] md:h-[55vh]"
                style={{
                    backgroundImage: movie?.backdropUrl ? `url(${movie.backdropUrl})` : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black" />
            </div>

            {/* Content */}
            <section className="container mx-auto px-4 -mt-24 md:-mt-32 pb-16 relative z-10">
                <div className="flex items-start justify-between mb-4">
                    <MovieActions movieId={String(movie.id || movie._id)} initiallyLiked={Boolean(movie.userLiked)} />
                </div>
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Poster */}
                    <div className="w-full md:w-60 lg:w-72 flex-shrink-0">
                        <div className="aspect-[2/3] rounded-lg overflow-hidden ring-1 ring-white/10 bg-gray-900">
                            {movie?.posterUrl ? (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img src={movie.posterUrl} alt={movie.title} className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-500">No Image</div>
                            )}
                        </div>
                    </div>

                    {/* Details */}
                    <div className="flex-1">
                        <h1 className="text-3xl md:text-5xl font-bold mb-2 movie-title">{movie.title}</h1>
                        <p className="mb-4 movie-subtitle">{movie.titleEnglish}</p>

                        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-300 mb-6">
                            {movie.year && <span className="px-2 py-1 bg-white/10 rounded">{movie.year}</span>}
                            {Array.isArray(movie.genres) && movie.genres.map((g: string) => (
                                <span key={g} className="px-2 py-1 bg-white/10 rounded">{g}</span>
                            ))}
                        </div>

                        {movie.plot && (
                            <div className="mb-8">
                                <h2 className="text-lg font-semibold mb-2">줄거리</h2>
                                <p className="text-gray-300 leading-relaxed">{movie.plot}</p>
                            </div>
                        )}

                        {/* Directors */}
                        {Array.isArray(movie.directors) && movie.directors.length > 0 && (
                            <div className="mb-6">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="font-semibold">감독</h3>
                                </div>
                                <PersonList type="Director" items={movie.directors} />
                            </div>
                        )}

                        {/* Cast */}
                        {Array.isArray(movie.cast) && movie.cast.length > 0 && (
                            <div className="mb-6">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="font-semibold">출연</h3>
                                </div>
                                <PersonList type="Actor" items={movie.cast.slice(0, 12)} />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
