import PropTypes from 'prop-types';
import css from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({ onLoadMore }) {
  return (
    <button onClick={onLoadMore} className={css.loadMoreBtn}>
      Load more
    </button>
  );
}

LoadMoreBtn.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
