import Star from './Star'; // Импортируем компонент Star

// Интерфейс для Props
interface StarsProps {
    count: number;
}

// Компонент Stars
const Stars: React.FC<StarsProps> = ({ count }) => {
    // Проверяем условие: если count не в пределах 1–5, возвращаем null
    if (count < 1 || count > 5 || !Number.isInteger(count)) {
      return null;
    }
  
    // Создаем массив звезд на основе count
    const starsArray = Array.from({ length: count }, (_, i) => <Star key={i} />);
  
    return <ul className="card-body-stars u-clearfix">{starsArray}</ul>;
  };
  
  export default Stars;