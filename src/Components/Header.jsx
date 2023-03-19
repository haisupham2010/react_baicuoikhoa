
import { NavLink } from "react-router-dom";

export default function Header() {
  //navbar bg-primary navbar-expand-lg

  const activeClass = (params) => {
    return params.isActive ? "nav-link active" : "nav-link";
  };

  return (
    <nav className="navbar bg-primary navbar-expand-lg" data-bs-theme="dark">
      <div className="container">

      <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>


    <ul className="navbar-nav">
        <NavLink className={activeClass} to="/tolinkA">
          App Name X
        </NavLink>

        <NavLink className={activeClass} to="/tolinkB">
          App Name Y
        </NavLink>
    </ul>
 


        <NavLink className={activeClass} to="/tolinkB">
          App Name Z
        </NavLink>

        <NavLink className={activeClass} to="/tolinkB">
          App Name D
        </NavLink>



      </div>
    </nav>
  );
}
