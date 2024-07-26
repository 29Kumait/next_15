import React from "react";
import stylex from "@stylexjs/stylex";
import ListItem from "./ListItem";
import { Data } from "@/types/types";

type ListProps = {
  data: Data;
};

const List: React.FC<ListProps> = ({ data }) => {
  return (
    <>
      {Object.entries(data).map(([key, items]) => (
        <div key={key}>
          <h2 {...stylex.props(stylesList.heading)}>{key}</h2>
          <ul {...stylex.props(stylesList.list)}>
            {items.map((item) => (
              <ListItem key={item.id} {...item} />
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default List;

const stylesList = stylex.create({
  heading: {
    fontSize: "20px",
    borderWidth: "4px",
    borderColor: "#1f2937",
    padding: "2rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  list: {
    marginTop: "0.5rem",
    width: "100%",
  },
});
