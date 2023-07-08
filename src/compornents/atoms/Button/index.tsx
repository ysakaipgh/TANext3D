import { type WithClassNameProps } from "~/defines/types";

/**
 * 単純なボタン コンポーネント
 *
 * @param param0 children, className
 * @returns JSX.Element
 */
const Button = ({ children, className, ...props }: WithClassNameProps) => {
  return (
    <button
      className={`btn ${className ?? ""}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
