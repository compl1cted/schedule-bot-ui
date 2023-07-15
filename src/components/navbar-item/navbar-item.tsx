import "./navbar-item.css";
import { NavbarItemProps } from "./navbar-item.props";

export const NavbarItem = (props: NavbarItemProps) => {
    const {text, iconPath} = props;

    return (
        <div className="navbar-item">
            <img src={iconPath} className="icon" />
            <p>{text}</p>
        </div>
    );
}