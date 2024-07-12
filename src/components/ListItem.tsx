interface ListItemProps {
    id: string
    name: string;
    url: string;
}

const ListItem: React.FC<ListItemProps> = ({ id, name, url }) => (
    <li key={id} className="flex items-center justify-between p-4 border rounded shadow-sm mb-2">
        <span className="text-lg font-medium">{name}</span>
        <a href={url} target="_blank" rel="noopener noreferrer" >
            URL: {name}
        </a>
    </li >

);
export default ListItem;
