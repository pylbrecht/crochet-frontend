import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="py-2 px-4 shadow outline-0 rounded-full border-0 bg-neutral-900 text-neutral-50 font-bold hover:bg-neutral-700"
    >
      {children}
    </button>
  );
};

export { Button };
