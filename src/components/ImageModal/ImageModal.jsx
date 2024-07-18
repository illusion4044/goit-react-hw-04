import PropTypes from 'prop-types';
import Modal from 'react-modal';
import css from './ImageModal.module.css';


export default function ImageModal({ isOpen, imageUrl, altText, onRequestClose }) {
    return (
      <Modal
        isOpen={isOpen}
        className={css.modalContent}
        onRequestClose={onRequestClose}
        contentLabel="Image Modal"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: 'none',
            border: 'none',
            padding: 0,
          },
        }}
      >
        <img src={imageUrl} alt={altText} style={{ maxWidth: '100%', maxHeight: '100vh' }} />
      </Modal>
    );
}

ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  imageUrl: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};
