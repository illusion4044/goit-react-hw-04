import PropTypes from 'prop-types';
import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export default function ImageGallery({ items, onImageClick }) {
  return (
    <ul className={css.imageGallery}>
      {items.map((item) => (
        <li key={item.id} className={css.imageCard}>
          <ImageCard
            imageUrl={item.urls.small}
            altText={item.alt_description}
            onClick={() => onImageClick(item.urls.regular)} 
          />
        </li>
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      urls: PropTypes.shape({
        small: PropTypes.string.isRequired,
        full: PropTypes.string.isRequired,
      }).isRequired,
      alt_description: PropTypes.string,
    })
  ).isRequired,
  onImageClick: PropTypes.func.isRequired,
};
