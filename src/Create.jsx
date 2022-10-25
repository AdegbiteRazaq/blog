import { useState } from "react";
import { useHistory } from "react-router-dom";
export default function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Samson");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();
  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  const bodyHandler = (e) => {
    setBody(e.target.value);
  };
  const authorHandler = (e) => {
    setAuthor(e.target.value);
  };
  const submitData = (e) => {
    e.preventDefault();
    setIsPending(true);
    const newData = {
      title,
      body,
      author,
    };
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newData),
    }).then(() => {
      console.log("New blog added");
      setIsPending(false);
      history.push("/");
    });
    console.log(newData);
    setTitle("");
    setBody("");
    setAuthor("");
  };

  return (
    <div className="create">
      <h2>Create Blog</h2>
      <form onSubmit={submitData}>
        <label>Blog Title:</label>
        <input type="text" value={title} onChange={titleHandler} required />
        <label>Blog Body:</label>
        <textarea value={body} onChange={bodyHandler} required></textarea>
        <label>Blog author</label>
        <select value={author} onChange={authorHandler}>
          <option value="Abbey">Abbey</option>
          <option value="Samson">Samson</option>
        </select>
        {!isPending && <button type="submit">Add blog</button>}
        {isPending && <button type="submit">Adding blog...</button>}
      </form>
    </div>
  );
}
