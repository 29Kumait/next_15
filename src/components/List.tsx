import stylex from "@stylexjs/stylex";
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
        <h1 {...stylex.props(stylesList.heading)}>{title}</h1>
        <ul {...stylex.props(stylesList.list)}>
            {listObj.map(item => (
                <ListItem key={item.id} {...item} />
            ))}
        </ul>
    </div>
);

export default List;

const stylesList = stylex.create({
    heading: {
        fontSize: '20px',
        borderWidth: '4px',
        borderColor: '#1f2937',
        padding: '2rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
    },
    list: {
        marginTop: '0.5rem',
        width: '100%',
    }
});
