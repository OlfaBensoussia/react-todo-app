// import { useContext } from 'react';
import { Link } from "react-router-dom";

import classes from "./navbar.module.css";
// import FavoritesContext from '../../store/favorites-context';

function Navbar() {
  //   const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Tasks</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Tasks</Link>
          </li>
          <li>
            <Link to="/favorites">
              My Favorites
              {/* <span className={classes.badge}>
                {favoritesCtx.totalFavorites}
              </span> */}
            </Link>
          </li>
          <li>
            <Link to="/new-task">Add Task </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
