"use client";

import React, { useState, useTransition } from "react";

type ListButtonProps = {
  children: React.ReactNode;
};

const ListButton: React.FC<ListButtonProps> = ({ children }) => {
  const [showList, setShowList] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleListButtonClick = () => {
    startTransition(() => {
      setShowList((prevShowList) => !prevShowList);
    });
  };

  return (
    <div>
      <button onClick={handleListButtonClick} disabled={isPending}>
        {isPending
          ? "Loading..."
          : showList
            ? "Hide"
            : "fetch List `data.json` "}
      </button>
      {showList && children}
    </div>
  );
};

export default ListButton;
