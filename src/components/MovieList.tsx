import React, { useState } from 'react';
import MovieCard from './MovieCard';
import './MovieList.css';

// Интерфейс для данных фильма
interface Movie {
  id: number;
  title: string;
  image: string;
  rating: number; // Новый параметр для рейтинга
}

// Список фильмов
const movies: Movie[] = [
  { id: 1, title: 'Супермен', image: 'https://avatars.mds.yandex.net/i?id=309a63e329cf0036998aa0770c0cae7208c618de-10919913-images-thumbs&n=13', rating: 5 },
  { id: 2, title: 'Одинокий странник', image: 'https://avatars.mds.yandex.net/i?id=f419e1b84a39e260cf600d60497dad84177bc852-9182206-images-thumbs&n=13', rating: 3 },
  { id: 3, title: 'Железный человек', image: 'https://avatars.mds.yandex.net/i?id=75eeddee549bb2e23745b5d3a5e8f2a34c4a48b4-9226056-images-thumbs&n=13', rating: 4 },
];

const MovieList: React.FC = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          image={movie.image}
          rating={movie.rating} // Передаём рейтинг
          isFavorite={favorites.includes(movie.id)}
          onFavoriteToggle={() => toggleFavorite(movie.id)}
        />
      ))}
    </div>
  );
};

export default MovieList;
