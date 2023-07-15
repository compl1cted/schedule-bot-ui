import "./button.css"
import { ButtonProps } from "./button.props";

export const Button = (props: ButtonProps) => {
    const { text} = props;

    return (
        <button className="button">{text}</button>
    );
}