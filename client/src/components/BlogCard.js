import React from 'react';
import { Link } from "react-router-dom";

const BlogCard = ({category, title, caption, image}) => {
    return (
        <div className="card rounded-0 col-md-4">
            <img src={image} className="card-img-top rounded-0" alt="" />
            <div className="card-body">
                <span className="card-category">{category}</span>
                <h5 className="card-title ">{title}</h5>
                <p className="card-text ">{caption}</p>
                <Link to="/blog" className="Card_ReadMoreBtn">Read More</Link>
            </div>
        </div>
    );
}

export default BlogCard;
