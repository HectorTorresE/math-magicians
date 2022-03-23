import { NavLink } from 'react-router-dom';
import './navBar.css';
import Logo from './logo.png';

const NavBar = () => {
  const pages = [
    {
      id: 0,
      path: '/',
      text: 'Home',
    },
    {
      id: 1,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 2,
      path: '/quote',
      text: 'Quote',
    },
  ];

  return (
    <nav className="NavBar">
      <img src={Logo} alt="Math" />
      <h1>Math Magicians</h1>
      <div>
        {pages.map((page) => (
          <NavLink
            key={page.id}
            to={page.path}
            style={{ isActive: 'active-link' }}
            className="link"
          >
            {page.text}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
