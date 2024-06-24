import React from "react";

const FeaturedContent = ({ title, description, category, image, link }) => {
    return (
        <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img src={image} alt={title} className="w-full h-auto transition-transform transform duration-300 ease-in-out hover:scale-105" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
                <div className="text-white text-sm uppercase tracking-wider mb-2">{category}</div>
                <h2 className="text-white text-2xl font-bold mb-2">{title}</h2>
                <p className="text-white mb-4">{description}</p>
                <a href={link} className="text-blue-500 font-semibold hover:text-blue-300 ">READ MORE</a>
            </div>
        </div>
    )
}

export default FeaturedContent;