export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

export function Input({ placeholder, ...other }: InputProps): JSX.Element {
  return <input type="text" placeholder={placeholder} {...other} />;
}

Input.displayName = "Input";
