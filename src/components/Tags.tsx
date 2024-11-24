import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

const Tags = (props: HTMLAttributes<HTMLDivElement>) => {
  const { className, children } = props;
  return (
    <div
      className={twMerge(
        'inline-flex items-center gap-2 px-2 py-1 border border-lime-400 text-lime-400 rounded-full',
        className
      )}
    >
      <div>&#10038;</div>
      <div className="text-sm">{children}</div>
    </div>
  );
};

export default Tags;
