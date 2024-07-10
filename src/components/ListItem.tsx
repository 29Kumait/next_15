import React from "react";

interface ListItemProps {
    id: string
    name: string;
    url: string;
}

const ListItem: React.FC<ListItemProps> = ({ id, name, url }) => (
    <li key={id}>
        <a href={url} target="_blank" rel="noopener noreferrer" >
            {name}
        </a>
    </li >

);
export default ListItem;
