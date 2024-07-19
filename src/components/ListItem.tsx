import Link from 'next/link';
import stylex from "@stylexjs/stylex";

interface ListItemProps {
    id: string;
    name: string;
    url: string;
}

const ListItem: React.FC<ListItemProps> = ({ id, name, url }) => {
    return (
        <li key={id} {...stylex.props(stylesListItem.listItem)}>
            <span {...stylex.props(stylesListItem.itemName)}>{name}</span>
            <Link href={url} {...stylex.props(stylesListItem.itemLink)}>
                {url}
            </Link>
        </li>
    );
};

export default ListItem;


const stylesListItem = stylex.create({
    listItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderRadius: '0.25rem',
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
        marginBottom: '0.5rem',
    },
    itemName: {
        display: 'inline-block',
        transition: 'transform 0.2s',
        fontSize: '1.125rem',
        fontWeight: 500,
        transform: {
            ':hover': 'translateX(0.25rem)',
        },
    },
    itemLink: {
        display: 'block',
        borderRadius: '0.5rem',
        borderWidth: '1px',
        borderStyle: 'solid',
        padding: '1.25rem',
        transition: 'border-color 0.2s, background-color 0.2s',

        borderColor: {
            default: 'transparent',
            '@media (prefers-color-scheme: dark)': '#3154e0ae',
            ':hover': '#d1d5db',
        },
        backgroundColor: {
            ':hover': '#f3f3f6da',

        },
    },
});
