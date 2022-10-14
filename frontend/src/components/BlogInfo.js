import "./BlogInfo.css";
import caret from "../assets/caret.svg";

const BlogInfo = () => {
  return (
    <div className="blog-info flex">
      <div className="back-btn">
        <img src={caret} alt="back button" />
      </div>

      <div className="blog-date">
        <div>
          <span>ARTICLES</span>
        </div>
        <div>
          <span>AUGUST 13, 2021 </span>
        </div>
      </div>
    </div>
  );
};

export default BlogInfo;
