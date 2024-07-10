import List from "../components/List";
import data from "../data.json";
import Head from "../components/Head";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl flex items-center justify-center font-bold text-3xl">
        <Head />
      </div>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <List listObj={data} />
      </div>
    </main>
  );
}