import PropTypes from 'prop-types';

export default function LoadMoreBtn({ onLoadMore }) {
  return (
    <button onClick={onLoadMore}>
      Load more
    </button>
  );
}

LoadMoreBtn.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
