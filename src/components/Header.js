import { useNavigate, useLocation } from "react-router-dom";
import { Collapse } from 'bootstrap';
// import '../App.css';

function Header() {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
    const navCollapse = document.getElementById("navbarSupportedContent");
    if (navCollapse && navCollapse.classList.contains("show")) {
      const bsCollapse = Collapse.getInstance(navCollapse);
      if (bsCollapse) {
        bsCollapse.hide();
      }
    }
  };

  const handleKeyDown = (e, path) => {
    if (e.key === 'Enter') {
      handleClick(path);
    }
  };

  const curLoc = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" data-bs-theme="dark">
      <div className="container-fluid">
        
        <span className="navbar-brand" style={{ cursor: "pointer" }} onClick={() => handleClick("/")} onKeyDown={(e) => handleKeyDown(e, "/")}>
          Keerthi Portfolio
        </span>

        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <span className={`nav-link fw-bold ${curLoc.pathname === "/" ? "active" : ""}`} style={{ cursor: "pointer" }} onClick={() => handleClick("/")}>
                Home
              </span>
            </li>
              <li className="nav-item">
              <span className={`nav-link fw-bold ${curLoc.pathname === "/about" ? "active" : ""}`} style={{ cursor: "pointer" }} onClick={() => handleClick("/about")}>
                About
              </span>
            </li>
            <li className="nav-item">
              <span className={`nav-link fw-bold ${curLoc.pathname === "/skills" ? "active" : ""}`} style={{ cursor: "pointer" }} onClick={() => handleClick("/skills")}>
                Skills
              </span>
            </li>
          
            <li className="nav-item">
              <span className={`nav-link fw-bold ${curLoc.pathname === "/projects" ? "active" : ""}`} style={{ cursor: "pointer" }} onClick={() => handleClick("/projects")}>
                Projects</span>
            </li>
            <li className="nav-item">
              <span className={`nav-link ${curLoc.pathname === "/contact" ? "active" : ""}`} style={{ cursor: "pointer" }} onClick={() => handleClick("/contact")}>
                <strong>Contact</strong>
              </span>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
