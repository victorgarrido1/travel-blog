import React from "react";

const AccommodationCard = () => {
   
const resortDetails = {
    imageURL: 'path/to/image-jpg', //placeholder
    title: "InterContinental Bora Bora Le Moana Resort",
    rating: "4.8/5",
    reviewCount: 847,
    description: "This intimate resort is situated at Matira Point, which is renowned for its spectacular and enchanting beauty. ",
    location: "Bora Bora, French Polynesia"
};

return (
    <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold text-gray-800 my-6">Accommodations</h1>
        <div className="max-w-4xl mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
            <img src={resortDetails.imageURL} alt={resortDetails.title} className="w-full h-96 object-cover" />
            <div className="p-5">
                <h2 className="text-2xl text-gray-800 font-bold">{resortDetails.title}</h2>
                <div className="flex items-center my-2">
                    <span className="text-yellow-400 text-lg">
                        {Array(Math.round(parseFloat(resortDetails.rating))).fill('*').join(' ')}
                    </span>
                       </div>
                       <p className="text-gray-600">{resortDetails.description}</p>
                       <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded">
                        Learn more
                       </button>
            </div>
        </div>
    </div>
)


}

export default AccommodationCard;