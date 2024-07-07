import PropTypes from 'prop-types';
export default function ImageCard({ imageUrl, altText }) {
  return (
    <div>
      <img src={imageUrl} alt={altText} />
    </div>
  );
}
ImageCard.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
  };