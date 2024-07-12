interface ListItemProps {
    id: string
    name: string;
    url: string;
}

const ListItem: React.FC<ListItemProps> = ({ id, name, url }) => (
    <li key={id} className="flex items-center justify-between p-4 border rounded shadow-sm mb-2">
        <span className="inline-block transition-transform group-hover:translate-x-1 text-lg font-medium motion-reduce:transform-none">{name}</span>
        <a
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            href={url} target="_blank" rel="noopener noreferrer" >
            URL: {name}
        </a>
    </li >

);
export default ListItem;
