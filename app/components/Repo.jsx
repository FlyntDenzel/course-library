import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

async function fetchRepo(name) {
  const response = await fetch(
    `https://api.github.com/repos/FlyntDenzel/${name}`,
    {
      //amount of time to wait before refetching new data
      next: {
        revalidate: 60,
      },
    }
  );
  const repo = await response.json();

  return repo;
}

const Repo = async ({ name }) => {
  const repo = await fetchRepo(name);
  //   console.log(repo);

  return (
    <>
      <h2 className='text-start font-bold text-2xl mt-2'>{repo.name}</h2>
      <p className="mt-2">{repo.description}</p>
      <div className="flex gap-20">
        <div className="card-stat">
          <FaStar />
          <span>{repo.stargazers_count}</span>
        </div>
        <div className="card-stat">
          <FaCodeBranch />
          <span>{repo.forks_count}</span>
        </div>
        <div className="card-stat">
          <FaEye />
          <span>{repo.watchers_count}</span>
        </div>
      </div>
    </>
  );
};

export default Repo;
