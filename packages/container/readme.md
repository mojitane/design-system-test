# Container Component

The `Container` component is a React functional component that provides a simple, styled container for wrapping content. It accepts children and additional HTML attributes, and comes with some default padding, border, and rounded corners. Additionally, it includes a Button (from `@mojitane/button`) rendered as "Container Button" within the container.

## Props

- **children** (`React.ReactNode`, optional): Elements to be rendered inside the container.
- **className** (`string`, optional): Additional CSS classes for styling the container.
- Any other props applicable to a standard `<div>` element (via `React.HTMLAttributes<HTMLDivElement>`).

## Usage

```tsx
import { Container } from "@mojitane/container";

<Container className="my-custom-class">
  <p>Some content here</p>
</Container>;
```

This will render your content inside a styled container, along with a button labeled "Container Button".

## Notes

- The button inside is included by default and uses the `Button` component from `@mojitane/button`.
- The container has built-in `p-4` (padding), `border`, and `rounded-lg` tailwind CSS classes, but you can extend or override with your own via `className`.
