import "./Menu.css";

import { MenuProps } from "./types";

const Menu = ({ active, navItems, onNavigate }: MenuProps) => {
  return (
    <>
      <nav className="menu">
        {navItems.map((item, index) => (
          <div
            className={`menu-item ${
              item.path === active ? "menu-item-active" : "clickable"
            }`}
            key={`menu-item-${index}`}
            onClick={() => onNavigate(item.path)}
          >
            <i className={`bi bi-${item.icon}`}></i>
          </div>
        ))}
      </nav>
    </>
  );
};

export default Menu;
