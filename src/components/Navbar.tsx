import { FC, memo } from "react";
import Link from "next/link";
const Navbar: FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark container">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about">
              <a className="nav-link">About</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/employees">
              <a className="nav-link">Employees</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default memo(Navbar);
