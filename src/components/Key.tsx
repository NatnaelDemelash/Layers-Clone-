import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Key(props: HTMLAttributes<HTMLDivElement>) {
  const { className, children, ...otherProps } = props;

  return (
    <div
      className={twMerge(
        "size-14 bg-neutral-300 text-gray-900 rounded-2xl font-medium inline-flex justify-center items-center",
        className
      )}
      {...otherProps}
    >
      {children}
    </div>
  );
}
