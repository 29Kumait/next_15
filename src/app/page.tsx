import List from "../components/List";
import data from "../data.json";
import Head from "../components/Head";
import { fetchListData } from "../actions/actions";
import ListUseSuspense from '../components/ListUseSuspense';

export default async function Home() {

  const list = fetchListData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-100">
      <div className="w-full max-w-5xl border-4 border-gray-800 p-8 bg-white">
        <div className="z-10 w-full max-w-5xl border-4 border-gray-800 p-8 bg-white flex items-center justify-center font-bold text-3xl mb-2">
          <Head />
        </div>
        <div className="mt-4">
          <List title="Static Content" listObj={data} />
        </div>
        <div className="mt-4">
          <List title="Server-Side Rendering (SSR)" listObj={await list} />
        </div>
        <div className="mt-4">
          <ListUseSuspense listPromise={list} />
        </div>
      </div>
    </main>
  );
}
