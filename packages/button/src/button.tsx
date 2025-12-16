export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...other }: ButtonProps): JSX.Element {
  return (
    <button type="button" {...other} className={`bg-red-500 text-white p-2 rounded-md ${className}`}>
      {children}
    </button>
  );
}

Button.displayName = "Button";
