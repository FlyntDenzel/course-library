import Link from "next/link";

async function fetchCourses() {
  const response = await fetch("http://localhost:3000/api/courses");
  const courses = await response.json();
  return courses;
}

const Courses = async () => {
  const courses = await fetchCourses();
  return (
    <div className="">
      {courses.map((course) => (
        <div key={course.id} className="list">
          <h2 className="heading">{course.title}</h2>
          <small className="level">Level: { course.level }</small>
          <p className="description">{course.description}</p>
          <Link href={course.link} target="_blank" className="link">
            Go To Course
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Courses;
