import Head from "../components/Head";
import { fetchListData } from "../actions/actions";
import List from "../components/List";
import { Data } from '../types/types';


export default async function Home() {
  const data: Data = await fetchListData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full max-w-5xl border-4 border-gray-800 p-8">
        <div className="z-10 w-full max-w-5xl border-4 border-gray-800 p-8 flex items-center justify-center font-bold text-3xl mb-2">
          <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
          </div>
          <Head title="List of Works" />
        </div>
        <div>
          <List data={data} />;
        </div>
      </div>
    </main>
  );
};
