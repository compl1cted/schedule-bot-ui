import "./label.css"
import { LabelProps } from "./label.props";

export const Label = (props: LabelProps) => {
    const { text } = props;
    return (
        <p className="label">{text}</p>
    );
}