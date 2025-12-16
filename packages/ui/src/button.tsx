export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...other }: ButtonProps): JSX.Element {
  return (
    <button type="button" {...other} className="bg-blue-500 text-white p-2 rounded-md">
      {children}
    </button>
  );
}

Button.displayName = "Button";
