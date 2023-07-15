export type InputProps = {
    placeholder: string;
    name: string;
    type: "text" | "password";

    onChange: (e: any) => void
};