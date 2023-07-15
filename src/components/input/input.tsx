import "./input.css"
import { InputProps } from "./input.props";

export const Input = (props: InputProps) => {
    const {name, placeholder, type, onChange} = props;

    return (
        <input className="input-box" name={name} placeholder={placeholder} type={type} onChange={onChange} />
    );
}