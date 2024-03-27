import Link from "next/link";
import Courses from "./components/Courses";

const HomePage = () => {
  return (
    <div >
      <h1 className="text-center font-bold text-2xl p-3">
        Welcome to Flynt's Library
      </h1>
      {/* <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/about/team">Team</Link></li>
      </ul> */}
      {/* <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur magnam
        natus obcaecati non placeat enim optio quod corporis, aspernatur
        consequatur aperiam temporibus dignissimos fugiat laboriosam nihil saepe
        aliquam recusandae soluta.
      </p> */}
      <Courses />
    </div>
  );
};

export default HomePage;
