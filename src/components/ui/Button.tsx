import React, { ReactNode } from 'react'
import classNames from "classnames";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  // buttonText: string | null;
}

export function Button({children, ...props}: ButtonProps) {
  return (
    <button
      className={classNames(
        "mt-12 rounded-xl bg-orange-600 px-5 py-5 text-center transition-all duration-300 hover:bg-orange-700",
      )}
      {...props}
    >
      {children}
    </button>
  );
}

