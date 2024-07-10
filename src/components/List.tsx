import React from 'react';
import ListItem from './ListItem';

interface ListProps {
    listObj: Array<{
        id: string;
        name: string;
        url: string;
    }>;
}

const List: React.FC<ListProps> = ({ listObj = [] }) => (
    <ul>
        {listObj.map(item => (
            <ListItem key={item.id} id={item.id} name={item.name} url={item.url} />
        ))}
    </ul>
);

export default List;