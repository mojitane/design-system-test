import { Button } from "@mojitane/button";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export function Container({ children, className, ...other }: ContainerProps): JSX.Element {
  return (
    <div {...other} className={`p-4 border rounded-lg ${className}`}>
      {children}
      <Button>Container Button</Button>
    </div>
  );
}

Container.displayName = "Container";

