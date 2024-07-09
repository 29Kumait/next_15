interface ListProps {
    listObj: {
        name: string;
        url: string;
    }[];
}

const List = ({ listObj }: ListProps) => {
    return (
        <ul>
            {listObj.map((obj) => (
                <li key={obj.name}>
                    {obj.name}
                    <a href={obj.url} target="_blank" rel="noopener noreferrer">
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default List;
