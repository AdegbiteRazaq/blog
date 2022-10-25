import { useHistory, useParams } from "react-router";
import React from "react";
import useFetch from "./useFetch";
export default function BlogDetails() {
  const { id } = useParams();
  const history = useHistory();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const deleteBlog = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };
  return (
    <div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <h6>Blog details :{id}</h6>
      {blog && (
        <article>
          <h3>{blog.title}</h3>
          <p>{blog.body}</p>
          <p>Written by: {blog.author}</p>
        </article>
      )}
      <button className="del-btn" onClick={deleteBlog}>
        delete blog
      </button>
    </div>
  );
}
