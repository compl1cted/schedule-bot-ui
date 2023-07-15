import "./navbar.css"
import { NavbarItem } from "../navbar-item/navbar-item";

export const Navbar = () => {
    return (
        <div className="navbar">
            <NavbarItem text="Button 1" iconPath="../public/vite.svg"></NavbarItem>
            <NavbarItem text="Button 2" iconPath="../public/vite.svg"></NavbarItem>
            <NavbarItem text="Button 3" iconPath="../public/vite.svg"></NavbarItem>
            <NavbarItem text="Button 4" iconPath="../public/vite.svg"></NavbarItem>
        </div>
    );
}