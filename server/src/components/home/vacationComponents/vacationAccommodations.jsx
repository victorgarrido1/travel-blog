import React from "react";

const AccommodationCard = () => {
  const resortDetails = {
    imageURL: "https://picsum.photos/500/400", // Corrected URL, placeholder image
    title: "InterContinental Bora Bora Le Moana Resort",
    rating: "4.8/5",
    travelLitReview: "Lit Travel Reviews", 
    reviewCount: 847,
    description:
      "This intimate resort is situated at Matira Point, which is renowned for its spectacular and enchanting beauty.",
    location: "Bora Bora, French Polynesia",
    travelLitStarRating: "?",
    travelLitHotelReview: "4 Star Hotel"
  };

  return (
    <div className="container mx-auto px-4">
    <h1 className="text-3xl font-semibold text-gray-800 my-6">
      Accommodations
    </h1>
    <div className="w-full mx-auto dark:bg-neutral-800 p-5 bg-white rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row">
      <img
        src={resortDetails.imageURL}
        alt={resortDetails.title}
        className="w-full md:w-1/2 h-96 object-cover"
      />
<div className="p-5 w-full md:w-1/2">
  <h2 className="text-2xl text-gray-800 font-bold">
    {resortDetails.title}
  </h2>
  <div className="flex justify-between items-center my-2">
    <div>
      <div className="text-sm text-gray-500 italic">{resortDetails.travelLitReview}</div>
      <div className="flex items-center">
        <span className="text-yellow-400 text-lg">
          {Array(Math.round(parseFloat(resortDetails.rating)))
            .fill("★")
            .join(" ")}
        </span>
        <span className="text-gray-600 ml-2" aria-label={`${resortDetails.reviewCount} reviews`}>
          {resortDetails.reviewCount} Reviews
        </span>
      </div>
    </div>
    <div>
      <div className="text-sm text-gray-500">
        Costco Star Rating <span className="bg-gray-200 px-1 rounded-full cursor-pointer hover:bg-gray-300">?</span>
      </div>
      <div className="text-sm text-gray-800">{resortDetails.travelLitHotelReview}</div>
    </div>
  </div>
  <p className="text-gray-600">{resortDetails.description}</p>
  <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Learn more
  </button>
</div>

    </div>
  </div>
  );
};

export default AccommodationCard;
