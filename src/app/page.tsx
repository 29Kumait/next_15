import React, { Suspense } from 'react';
import List from "../components/List";
import data from "../data.json";
import Head from "../components/Head";
import { fetchListData } from "../actions/actions";
import ListUse from '../components/ListUse';




export default async function Home() {

  const list = await fetchListData();

  const listPromise = fetchListData();


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-100">
      <div className="w-full max-w-5xl border-4 border-gray-800 p-8 bg-white">
        <div className="z-10 w-full max-w-5xl border-4 border-gray-800 p-8 bg-white flex items-center justify-center font-bold text-3xl mb-2">
          <Head />
        </div>
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <List listObj={data} />
        </div>
        <div className="mt-4">
          <h1 className="text-2xl border-4 border-gray-800 p-8 bg-white font-bold mb-4">(SSR)</h1>
          <List listObj={list} />
        </div>
        <div className="mt-4">
          <h1 className="text-2xl border-4 border-gray-800 p-8 bg-white font-bold mb-4"> `Suspense` component & `use` API</h1>
          <Suspense fallback={<div>Loading...</div>}>
            <ListUse listPromise={listPromise} />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
