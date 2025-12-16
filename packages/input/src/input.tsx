export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

export function InputComponent({
  placeholder,
  ...other
}: InputProps): React.JSX.Element {
  return <input type="text" placeholder={placeholder} {...other} />;
}
