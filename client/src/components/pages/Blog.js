import React, { useEffect } from "react";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Css/Blog.css";
import { useBlogContext } from "../../context/blog_context";
import BlogCard from "../BlogCard";

const Blog = (props) => {
  const { blog, filterBlog } = useBlogContext();
  useEffect(() => {
    props.setProgress(10);
    props.setProgress(30);
    props.setProgress(50);
    props.setProgress(100);
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, []);
  // const settings = {
  //   className: "center",
  //   centerMode: true,
  //   infinite: true,
  //   centerPadding: "60px",
  //   slidesToShow: 2,
  //   speed: 500,
  // };

  return (
    <div className="blog">
      <div className="container">
        {/* ****************** Menus****************** */}
        <h1>News</h1>
        <div className="blog_navbar">
          <ul className="p-0 text-center">
            <li onClick={() => { filterBlog(blog) }}>All</li>
            <li onClick={() => { filterBlog(blog) }}>ANC</li>
            <li onClick={() => { filterBlog(blog) }}>Earbuds</li>
            <li onClick={() => { filterBlog(blog) }}>New Release</li>
            <li onClick={() => { filterBlog(blog) }}>News</li>
            <li onClick={() => { filterBlog(blog) }}>Press Releases</li>
            <li onClick={() => { filterBlog(blog) }}>Wireless</li>
          </ul>
        </div>
        {/* *************************************Desktop Responsive********************************************* */}
        <div className="hero_banner">
          <div className="image-wrapper">
            <img className="HeroImage" src="https://cdn.shopify.com/s/files/1/0508/7461/3942/articles/1_1500x.jpg?v=1664437542" alt="" />
          </div>
          <div className="hero_banner_txt">
            <h4 className="hero_banner_txt_heading">New Arrival | SOUNDPEATS Launches Life Wireless Earbuds in the US</h4>
            <button className="ReadMorebtn mt-2">READ MORE</button>
          </div>
        </div>

        {/* *************************************Product Cards********************************************* */}
        <div className="blog_card">
          <div className="row">
            {blog.map((item, index) => {
              const { id, category, title, caption, image } = item;

              return (
                <BlogCard
                  key={id}
                  category={category}
                  title={title}
                  caption={caption}
                  image={image}
                />
              )
            })}
          </div>
        </div>
        {/* ******************************************Shop Now*********************************************************** */}
      </div>
    </div>
  );
};

export default Blog;