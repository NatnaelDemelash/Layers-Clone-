import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Avatar(props: HTMLAttributes<HTMLDivElement>) {
  const { className, children, ...otherProps } = props;
  return (
    <div
      className={twMerge(
        "size-20 rounded-full border border-lime-400 p-1",
        className
      )}
      {...otherProps}
    >
      {children}
    </div>
  );
}
