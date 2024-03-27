import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";
import { resolve } from "styled-jsx/css";

async function fetchRepos() {
  const response = await fetch(
    "https://api.github.com/users/FlyntDenzel/repos",
    {
      //amount of time to wait before refetching new data
      next: {
        revalidate: 60,
      },
    }
  );

  //wait one second before fetching data from the api
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const repos = await response.json();
  return repos;
}

const ReposPage = async () => {
  const repos = await fetchRepos();

  return (
    <div>
      <h2 className="text-center font-bold text-2xl p-3">Repositories</h2>
      <ul className="">
        {repos.map((repo) => (
          <li
            key={repo.id}
            className="border bg-blue-400 text-white mt-3 p-3 rounded-lg hover:border-blue-400"
          >
            <Link href={`/code/repos/${repo.name}`}>
              <h3 className="font-bold text-xl">{repo.name}</h3>
              <p>{repo.description}</p>
              <div className="flex justify-between">
                <span>
                  <FaStar /> {repo.stargazers_count}
                </span>
                <span>
                  <FaCodeBranch /> {repo.forks_count}
                </span>
                <span>
                  <FaEye /> {repo.watchers_count}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ReposPage;
