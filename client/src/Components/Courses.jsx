import Card from "./Card";
import { Link } from "react-router-dom";

export default function Courses({ items, preview = false }) {
  const courses = items.filter((item) => item.category === "course");
  const visibleCourses = preview ? courses.slice(0, 4) : courses;

  return (
    <section className="wrap">
      <h2>Courses We teach</h2>
      <div className="grid">
        {visibleCourses.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
      {preview && (
        <Link className="btn courses-more" to="/courses">
          See more courses
        </Link>
      )}
    </section>
  );
}
