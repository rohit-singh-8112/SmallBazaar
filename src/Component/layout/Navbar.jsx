import '../style/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <a href="#" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Electronics</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Fashion</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Home & Kitchen</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Books</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Sports</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">More</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;