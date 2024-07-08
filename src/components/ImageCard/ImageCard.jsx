import PropTypes from 'prop-types';

const ImageCard = ({ imageUrl, altText, onClick }) => {
  return (
    <div onClick={onClick} style={{ cursor: 'pointer' }}>
      <img src={imageUrl} alt={altText} />
    </div>
  );
};

ImageCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageCard;
