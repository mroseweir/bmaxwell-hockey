import React, { useState, useEffect } from "react";
import axios from "axios";

function BlogHome() {
  const baseURL = "http://localhost:8080/bmaxwell/wp-json/wp/v2/posts";

  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState(null);

  //   console.log(blogs);

  let blogsArr = [];

  useEffect(() => {
    axios
      .get(`${baseURL}`)
      .then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          blogsArr.push(res.data[i]);
          console.log(blogsArr);
        }
      })
      .finally(() => {
        setTimeout(() => {
          setBlogs(blogsArr);
          setLoading(false);
        }, 1000);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <div>
          <h1>loading</h1>
        </div>
      ) : (
        <div>
          {blogs.map((blog, index) => {
            return (
              <div>
                <h1>{blogs[index].title.rendered}</h1>
                <p>{blogs[index].content.rendered}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default BlogHome;
