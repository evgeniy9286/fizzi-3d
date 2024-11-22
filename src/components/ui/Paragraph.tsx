import classNames from 'classnames';
import React from 'react'

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant: "hero-body" | "md" | "lg" | "button-text";
  children: React.ReactNode;
  className?: string;
};

export function Paragraph({variant, children, ...props}: ParagraphProps):JSX.Element {
  return (
    <p
      className={classNames("text-black", classNames, {
        ["text-2xl font-normal text-sky-950"]: variant == "hero-body",
        ["text-3xl text-sky-950"]: variant == "md",
        ["text-[29px] text-sky-950"]: variant == "lg",
        ["text-2xl font-bold uppercase tracking-wide text-white"]:
          variant == "button-text",
      })}
      {...props}
    >
      {children}
    </p>
  );
}
