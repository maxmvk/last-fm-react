import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import logoUrl from "../../assets/images/logo.png"

const Header = () => {
  return (
    <header className={styles.header}>
      <NavLink to="/">
        <img src={logoUrl} alt="logo" className={styles.header__logo}/>
      </NavLink>
      <nav className={styles.header__nav}>
        <NavLink exact to="/" className={styles.header__link} activeClassName={styles.header__link_active}>Main</NavLink>
        <NavLink exact to="/search" className={styles.header__link} activeClassName={styles.header__link_active}>Search</NavLink>
      </nav>
    </header>
  )
}

export default Header;