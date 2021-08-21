import logo from './racoon.png';
import './PageNotFound.css';

function PageNotFound() {
  return (
    <div className="page-not-found">
      <div>
        <h1>Whoops....</h1>
        <div>The page you were looking for does not exist</div>
      </div>

      <div className="logo">
        <img src={logo} alt="" />
      </div>
    </div>
  );
}

export default PageNotFound;
