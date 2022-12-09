import {Link} from "react-router-dom";

const Missing = () => {
  return (
      <main className="Missing">
        <h2>Page not found</h2>
        <p>
          <Link to="/">Back Home</Link>
        </p>
      </main>
  );
};

export default Missing;