import { RoutePath } from "../../routers/routes";

export interface NavItem {
  icon: String;
  path: RoutePath;
}

export interface MenuProps {
  active: RoutePath | false;
  navItems: NavItem[];
  handleNavigation: (data: RoutePath) => void;
}
