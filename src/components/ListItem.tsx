import React from "react";

interface ListItemProps {
    id: string
    name: string;
    url: string;
}

const ListItem: React.FC<ListItemProps> = ({ id, name, url }) => (
    <li key={id} className="flex items-center justify-between bg-white p-4 border rounded shadow-sm mb-2">
        <span className="text-lg font-medium">{name}</span>
        <a href={url} target="_blank" rel="noopener noreferrer" >
            {url}
            <input type="checkbox" className="w-6 h-6" disabled />
        </a>
        {/* <input type="checkbox" className="w-6 h-6" disabled /> */}
    </li >

);
export default ListItem;
