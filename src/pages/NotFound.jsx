import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <article className="notfound-section">
      <h1 className="title-404">
        Sorry, the page you were looking for was not found
      </h1>

      <Link to="/" className="link404">
        Return to Home
      </Link>
    </article>
  );
}
