import { TailSpin } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div className="loader">
      <TailSpin height="80" width="80" color="blue" ariaLabel="loading" />
    </div>
  );
}
