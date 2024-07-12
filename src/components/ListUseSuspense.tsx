import { use, Suspense } from 'react';
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
                {list.map(({ id, name, url }) => (
                    <li key={id}>
                        <a href={url}>{name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const ListUseSuspense = ({ listPromise }: ListUseProps) => {

    return (
        <>
            <h1 className="text-2xl border-4 border-gray-800 p-8 bg-white font-bold mb-4"> `Suspense` component & `use` API</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <ListUse listPromise={listPromise} />
            </Suspense>
        </>
    );
}


export default ListUseSuspense;