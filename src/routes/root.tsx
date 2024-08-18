import { Link, NavLink, Outlet } from "react-router-dom";
import { css } from "ui/css";

const layoutCSS = css({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
});

const mainCSS = css({ flexGrow: 1 });

export const Layout = () => {
  return (
    <div className={layoutCSS}>
      <header>
        <Link to="/">Logo</Link>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Page1</NavLink>
            </li>
            <li>
              <NavLink to="/page2">Page2</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main className={mainCSS}>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
};
