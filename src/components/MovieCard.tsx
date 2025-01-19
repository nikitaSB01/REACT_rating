import React from 'react';
import Stars from './Stars'; // Импортируем компонент Stars
import './MovieCard.css';

// Интерфейс для пропсов
interface MovieCardProps {
  title: string; // Название фильма
  image: string; // URL картинки
  onFavoriteToggle: () => void; // Коллбэк для переключения "в избранное"
  isFavorite: boolean; // Статус "в избранном"
  rating: number; // Рейтинг фильма (от 1 до 5)
}

// Компонент MovieCard
const MovieCard: React.FC<MovieCardProps> = ({ title, image, onFavoriteToggle, isFavorite, rating }) => {
  return (
    <div className="movie-card">
      <img src={image} alt={title} className="movie-card-image" />
      <div className="movie-card-content">
        <h3 className="movie-card-title">{title}</h3>
        
        {/* Добавляем компонент рейтинга */}
        <Stars count={rating} />

        <div className="movie-card-actions">
          <button className={`favorite-button ${isFavorite ? 'active' : ''}`} onClick={onFavoriteToggle}>
            {isFavorite ? '❤️' : '🤍'}
          </button>
          <button className="details-button">Подробнее</button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
