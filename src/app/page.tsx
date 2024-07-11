import Head from "../components/Head";
import ListDataSuspense from "../components/ListDataUse";
import { ListData, ListFetch } from "../components/List";

export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-100">
      <div className="z-10 w-full max-w-5xl border-4 border-gray-800 p-8 bg-white flex items-center justify-center font-bold text-3xl mb-2">
        <Head />
      </div>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <ListData />
        <ListFetch />
      </div>
      <ListDataSuspense />
    </main>
  );
}
