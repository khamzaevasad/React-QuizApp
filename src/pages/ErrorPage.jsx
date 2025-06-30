import { Link, useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <div className="error-container container">
        <div>
          <h3>🧭 404 Error: The Page Has Vanished!</h3>
          <h6>
            Oops! You’ve reached the edge of the internet — the page you’re
            looking for is off on an adventure! But no worries — our dev team
            has grabbed a map, a compass, and a strong cup of coffee ☕ to track
            it down. In the meantime, relax with some virtual tea and pixelated
            biscuits 🍪
          </h6>
          <Link to="/" className="btn">
            Go To Home
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="error-container container">
      <div>
        <h3>🚨 Oops! We did a backflip into the code void.</h3>
        <h6>
          It seems our web page performed a somersault and vanished into a
          mysterious digital rabbit hole 🕳️🐇. Our developers are currently
          wrestling with some tangled HTML spaghetti 🍝. Hold on — the rescue
          mission is in full swing!
        </h6>
        <p></p>
        <Link to="/" className="btn">
          Go To Home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
