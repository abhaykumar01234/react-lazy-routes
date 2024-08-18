import { Link, NavLink, Outlet } from "react-router-dom";
import { css, cx } from "ui/css";
import { hstack } from "ui/patterns";

const layoutCSS = css({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  paddingInline: "max(calc(50vw - 600px), 1rem)",
});
const paddingCSS = css({ paddingBlock: "1rem" });

const mainCSS = css({ flexGrow: 1 });

export const Layout = () => {
  return (
    <div className={layoutCSS}>
      <header className={cx(hstack({ justify: "space-between" }), paddingCSS)}>
        <Link to="/">Logo</Link>
        <nav>
          <ul className={hstack()}>
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
      <footer className={paddingCSS}>Footer</footer>
    </div>
  );
};
