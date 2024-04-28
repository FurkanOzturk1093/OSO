import { Link } from "react-router-dom";

function EmptyRoute() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>404 - Page Not Found</h2>
      <p>
        We're sorry, the page you requested is on progress. I will built after
        hired.
      </p>
      <Link to="/audience" style={{ textDecoration: "none", color: "blue" }}>
        <button
          style={{
            padding: "10px 20px",
            borderRadius: "5px",
            background: "lightblue",
            border: "none",
            cursor: "pointer",
          }}
        >
          Go to Audience Page
        </button>
      </Link>
    </div>
  );
}

export default EmptyRoute;
