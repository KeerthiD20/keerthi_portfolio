import { useNavigate, useLocation } from "react-router-dom";
// import './App.css';

function Header() {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };

  const curLoc = useLocation();

  return (
    <div>
      <nav className="navbar bg-dark navbar-expand-lg fixed-top" data-bs-theme="dark">
        <div className="container-fluid">

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
    </div>
  );
}

export default Header;
