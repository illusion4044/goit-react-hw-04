import PropTypes from 'prop-types';
import Modal from 'react-modal';

export default function ImageModal({ isOpen, imageUrl, altText, onRequestClose }) {
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Image Modal"
      >
        <img src={imageUrl} alt={altText} />
      </Modal>
    );
  }

ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  imageUrl: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};


