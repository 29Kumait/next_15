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


import data from "../data.json";

export const ListData = () => {
    return (
        <div className="mt-4">
            <h1 className="text-2xl border-4 border-gray-800 p-8 bg-white font-bold mb-4">Import .json </h1>
            <List listObj={data} />
        </div>
    )
}


import { fetchListData } from "../actions/actions";

export async function ListFetch() {
    const list = await fetchListData();
    return (
        <div className="mt-4">
            <h1 className="text-2xl border-4 border-gray-800 p-8 bg-white font-bold mb-4">FS fetch</h1>
            <List listObj={list} />
        </div>
    )
}


