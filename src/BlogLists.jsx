import { Link } from "react-router-dom";

export default function BlogLists({ blogs, title, handledelete }) {
  return (
    <div>
      <h2>{title}</h2>
      <div>
        {blogs.map((blog) => (
          <div className="blog-review" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
              <h3 className>{blog.title}</h3>
              <p>Written by: {blog.author}</p>
            </Link>
            {/* <button
              className=" btn btn-success"
              onClick={() => handledelete(blog.id)}
            >
              delete Blog
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
}
