import { type OnlyChildrenProps } from "~/defines/types";

/**
 * 強調文字列表現 コンポーネント
 *
 * @param param0 children
 * @returns JSX.Element
 */
const SpanEmphasis = ({ children, ...props }: OnlyChildrenProps) => {
  return (
    <span
      className="span_emphasis"
      {...props}
    >
      {children}
    </span>
  );
};

export default SpanEmphasis;
