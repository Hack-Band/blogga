import React from "react";
import { Link } from "react-router-dom";
import "./BlogPost.css";
import thumbnail from "../assets/POST THUMBNAIL.png";

const BlogPost = () => {
  return (
    <section className="blog-post flex">
      <div className="blog-post-content">
        <span>AUGUST 13, 2022</span>
        <Link to="/blog">
          <h3>
            10 Hilarious Cartoons That Depict Real-Life Problems of Programmers
          </h3>
        </Link>
        <p>
          Redefined the user acquisition and redesigned the onboarding
          experience, all within 3 working weeks.
        </p>
      </div>

      <div className="blog-post-image">
        <img src={thumbnail} alt="post thumbnail" />
      </div>
    </section>
  );
};

export default BlogPost;
