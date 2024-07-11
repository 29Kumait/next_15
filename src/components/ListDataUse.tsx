'use client';

import React from 'react';
import { use } from 'react';

interface ListData {
    id: string;
    name: string;
    url: string;
}

interface ListDataUseProps {
    listDataPromise: Promise<ListData[]>;
}

const ListDataUse: React.FC<ListDataUseProps> = ({ listDataPromise }) => {
    const listData = use(listDataPromise);

    return (
        <div>
            <h1>List Data `use` hook </h1>
            <ul>
                {listData.map(item => (
                    <li key={item.id}>
                        <a href={item.url}>{item.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListDataUse;
