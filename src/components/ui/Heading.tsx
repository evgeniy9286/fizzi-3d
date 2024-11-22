import classNames from 'classnames';
import React from 'react'

type HeadingProps = {
  variant: "hero-heading" | "hero-subheading" | "text-side-subheading";
  children: React.ReactNode;
  className?: string;
};

export const Heading = ({ variant, children }: HeadingProps): JSX.Element => {
  

   switch (variant) {
     case "hero-heading":
       return (
         <h1
           className={classNames(
             "hero-header flex flex-col text-7xl font-extrabold uppercase leading-[.8] text-orange-500 md:text-[9rem] lg:text-[13rem]",
           )}
         >
           {children}
         </h1>
       );
     case "hero-subheading": {
       return (
         <h2
           className={classNames(
             "mt-12 text-5xl font-semibold text-sky-950 lg:text-6xl",
           )}
         >
           {children}
         </h2>
       );
     }
     case "text-side-subheading": {
       return (
         <h3
           className={classNames(
             "uppercase text-6xl font-bold text-sky-950 lg:text-7xl",
           )}
         >
           {children}
         </h3>
       );
     }
     default:
       return <></>;
   }
}