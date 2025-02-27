import MovieCard from "./card";
export default function MovieList() {
  const movies = [
    {
      id: 1,
      title: "The Wonder",
      poster: "public/3421332.jpg",
      genre: "Drama - Mysterious",
      language: "English",
      duration: "1h 48m",
      year: 2022,
      ratings: { imdb: 6.6, rottenTomatoes: 85, audienceScore: 72 },
    },
    {
      id: 2,
      title: "The Crow",
      poster: "public/3421332.jpg",
      genre: "Action - Drama",
      language: "English",
      duration: "1h 48m",
      year: 2024,
      ratings: { imdb: 7.0, rottenTomatoes: 78, audienceScore: 75 },
    },
    {
      id: 3,
      title: "Sleep",
      poster: "public/3421332.jpg",
      genre: "Drama - Horror - Thriller",
      language: "Korean",
      duration: "1h 42m",
      year: 2023,
      ratings: { imdb: 7.5, rottenTomatoes: 88, audienceScore: 79 },
    },
    {
      id: 4,
      title: "Sleep",
      poster: "public/3421332.jpg",
      genre: "Drama - Horror - Thriller",
      language: "Korean",
      duration: "1h 42m",
      year: 2023,
      ratings: { imdb: 7.5, rottenTomatoes: 88, audienceScore: 79 },
    },
    {
      id: 5,
      title: "Sleep",
      poster: "public/3421332.jpg",
      genre: "Drama - Horror - Thriller",
      language: "Korean",
      duration: "1h 42m",
      year: 2023,
      ratings: { imdb: 7.5, rottenTomatoes: 88, audienceScore: 79 },
    },
    {
      id: 6,
      title: "Sleep",
      poster: "public/3421332.jpg",
      genre: "Drama - Horror - Thriller",
      language: "Korean",
      duration: "1h 42m",
      year: 2023,
      ratings: { imdb: 7.5, rottenTomatoes: 88, audienceScore: 79 },
    },
    {
      id: 7,
      title: "Sleep",
      poster: "public/3421332.jpg",
      genre: "Drama - Horror - Thriller",
      language: "Korean",
      duration: "1h 42m",
      year: 2023,
      ratings: { imdb: 7.5, rottenTomatoes: 88, audienceScore: 79 },
    },
    {
      id: 8,
      title: "Sleep",
      poster: "public/3421332.jpg",
      genre: "Drama - Horror - Thriller",
      language: "Korean",
      duration: "1h 42m",
      year: 2023,
      ratings: { imdb: 7.5, rottenTomatoes: 88, audienceScore: 79 },
    },
  ];

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );
}
