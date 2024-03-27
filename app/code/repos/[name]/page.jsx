import { Suspense } from "react";
import Repo from "@/app/components/Repo";
import RepoDirs from "@/app/components/RepoDirs";
import Link from "next/link";

const RepoPage = ({ params: { name } }) => {
  return (
    <div className="border bg-blue-400 text-white mt-3 p-4 rounded-lg">
      <Link
        href="/code/repos"
        className="border px-2 rounded-2xl text-black p-1 hover:bg-white transition-colors duration-300"
      >
        Back to Repositories
      </Link>
      <Suspense fallback={<div>Loading repo...</div>}>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div>Loading directories...</div>}>
        <RepoDirs name={name} />
      </Suspense>
    </div>
  );
};

export default RepoPage;
