import React from "react";

interface HeadProps {
  title: string;
}

const Head: React.FC<HeadProps> = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

export default Head;
