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
    <ul className="space-y-2 w-full">
        {listObj.map(item => (
            <ListItem key={item.id} {...item} />
        ))}
    </ul>
);

export default List;