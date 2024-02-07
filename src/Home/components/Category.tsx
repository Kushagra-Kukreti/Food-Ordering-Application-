// Category.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Category.css"
type ItemType = {
    type: string;
    desc: string;
    imgUrl: string;
};

type CategoryProps = {
    item: ItemType;
    index: number;
};

const Category: React.FC<CategoryProps> = ({ item, index }) => {
    const navigate = useNavigate();

    return (
        <button
            className="category-card"
            key={index}
            onClick={() => navigate("/store")}
        >
            <img
                className="category-img"
                src={item.imgUrl}
            />
            <div className="category-content">
                <h5 className="category-title">{item.type}</h5>
                <p className="category-description">{item.desc}</p>
            </div>
        </button>
    );
};

export default Category;
