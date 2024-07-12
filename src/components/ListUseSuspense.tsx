import { use, Suspense } from 'react';
import List from './List';

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
            <List title=" `Suspense` component & `use` API " listObj={list} />
        </div>
    );
};

const ListUseSuspense = ({ listPromise }: ListUseProps) => {

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ListUse listPromise={listPromise} />
        </Suspense>

    );
}


export default ListUseSuspense;