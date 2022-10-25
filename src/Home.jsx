// import { useState, useEffect } from "react";
import BlogLists from "./BlogLists";
import useFetch from "./useFetch";

export default function Home() {
  const {
    data: blogs,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs");
  // const [isPending, setIsPending] = useState(true);
  // const [blogs, setBlogs] = useState(null);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   setTimeout(() => {
  //     fetch("http://localhost:8000/blogss")
  //       .then((res) => {
  //         if (!res.ok) {
  //           throw Error("Oops! data not fetched from resource");
  //         }
  //         return res.json();
  //       })
  //       .then((data) => {
  //         setBlogs(data);
  //         setIsPending(false);
  //       })
  //       .catch((err) => {
  //         console.log(err.message);
  //         setError(err.message);
  //         setIsPending(false);
  //       });
  //   }, 1000);
  // }, []);

  return (
    <div>
      {/* <BlogLists blogs={blogs} title="All Blogs" handledelete={handleDelete} /> */}
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogLists blogs={blogs} title="All Blogs" />}
    </div>
  );
}
