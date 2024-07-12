import ListItem from './ListItem';
interface ListProps {
    listObj: Array<{
        id: string;
        name: string;
        url: string;
    }>;
    title: string;
}

const List: React.FC<ListProps> = ({ listObj = [], title }) => (
    <div>
        <h1 className="text-2xl border-4 border-gray-800 p-8 font-bold mb-4">{title}</h1>
        <ul className="space-y-2 w-full">
            {listObj.map(item => (
                <ListItem key={item.id} {...item} />
            ))}
        </ul>
    </div>
);

export default List;
