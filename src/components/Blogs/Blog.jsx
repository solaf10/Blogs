import "./Blogs.css";
import { MdArrowOutward } from "react-icons/md";

const Blog = ({ image, title, author, desc }) => {
  return (
    <div className="blog">
      <img src={image} />
      <span className="author">{author}</span>
      <h3>
        {title}
        <MdArrowOutward className="icon" />
      </h3>
      <p>{desc}</p>
    </div>
  );
};

export default Blog;
