import "./BlogInfo.css";

const BlogInfo = () => {
  let url = window.location.href;

  //checks if user is on blog page and updates the blog slug
  function getUrl(url) {
    if (url.includes("/blog")) {
      return <span>ARTICLES</span>;
    } else {
      return <span>FEATURED POST</span>;
    }
  }

  return (
    <div className="blog-info flex">
      <div className="blog-date">
        <div>{getUrl(url)}</div>
        <div>
          <span>AUGUST 13, 2021 </span>
        </div>
      </div>
    </div>
  );
};

export default BlogInfo;
