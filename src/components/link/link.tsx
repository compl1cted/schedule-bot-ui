import "./link.css"
import { LinkProps } from "./link.props";

export const Link = (props: LinkProps) => {
    const {text, link} = props;

    return (
        <a href={link}>{text}</a>
    );
}