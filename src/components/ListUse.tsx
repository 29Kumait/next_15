import React, { use } from 'react';
interface List {
    id: string;
    name: string;
    url: string;
}
interface ListUseProps {
    listPromise: Promise<List[]>;
}

const ListUse = ({ listPromise }: ListUseProps) => {
    const list = use(listPromise);

    return (
        <div>
            <ul>
                {list.map(item => (
                    <li key={item.id}>
                        <a href={item.url}>{item.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListUse;

