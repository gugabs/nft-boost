import { twMerge } from "tailwind-merge";

type Container = React.PropsWithChildren<ContainerProps>;

const Container: React.FC<Container> = ({ children, className }) => {
  const defaultClassName = "w-full max-w-grid px-3 mx-auto";
  const mergedClassName = twMerge(defaultClassName, className);

  return (
    <div className={mergedClassName}>
      {children}
    </div>
  );
}

export default Container;