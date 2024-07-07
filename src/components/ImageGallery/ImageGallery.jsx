
import PropTypes from 'prop-types';
import ImageCard from '../ImageCard/ImageCard';

export default function ImageGallery({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <ImageCard imageUrl={item.urls.small} altText={item.alt_description} />
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
      }).isRequired,
      alt_description: PropTypes.string,
    })
  ).isRequired,
};


