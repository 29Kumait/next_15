'use server';

import { use, Suspense } from 'react';
import { fetchData } from '../actions/actions';
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
            <h1 className="text-2xl border-4 border-gray-800 p-8 bg-white font-bold mt-4 mb-4">List Data `use` hook</h1>
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


const ListDataSuspense = () => {
    const listDataPromise = fetchData();
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <ListDataUse listDataPromise={listDataPromise} />
            </Suspense>
        </div>
    );
}


export default ListDataSuspense;
