export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer-copyright">
        &copy; {year} #VANLIFE. All rights reserved.
      </p>

      <p className="author">
        Created by{" "}
        <a
          href="https://github.com/federicocelia"
          target="_blank"
          rel="noopener noreferrer"
        >
          Federico Celia
        </a>
      </p>

      <div className="footer-credits">
        <span
          className="footer-credits-btn"
          tabIndex="0"
          aria-label="Show credits"
        >
          Credits
        </span>

        <div className="footer-credits-tooltip">
          <ul>
            <li>
              Website designed and developed by{" "}
              <a
                href="https://github.com/federicocelia"
                target="_blank"
                rel="noopener noreferrer"
              >
                Federico Celia
              </a>
            </li>
            <li>
              <a
                href="https://www.flaticon.com/free-icons/ridesharing"
                rel="noopener noreferrer"
                title="ridesharing icons"
              >
                Logo by Erix
              </a>
            </li>

            <li>
              Icons from
              <a
                href="https://www.flaticon.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Flaticon
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
