import "./Header.css";

import Menu from "../Menu";
import { MenuProps } from "../Menu/types";

const Header = ({ active, navItems }: MenuProps) => {
  return (
    <>
      <header>
        <div className="header-right">
          <h1>
            Mia<span>Play</span>
          </h1>

          <div className="main-menu">
            <Menu active={active} navItems={navItems} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;