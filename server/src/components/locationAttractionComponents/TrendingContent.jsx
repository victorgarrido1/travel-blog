import React from "react";
import SmallContentCard from "./SmallContentCard";

const TrendingContent = () => {
  const contentCards = [
    {
      id: 1,
      title: "Motu Mute:",
      description: "This motu is located on the eastern side of the lagoon and is known for its beautiful coral gardens. It's a popular spot for snorkeling and diving.",
      category: "In house events",
      image: "https://craftypixels.com/placeholder-image/200x200/3048bf/8f8f8f&text=Motu+Mute",
      link: "/events/motu-mute",
    },
    {
      id: 2,
      title: "Whale Watching (seasonal):",
      description: "From July to November, experience the magic of humpback whales in Bora Bora. Our tours offer a rare, up-close encounter with these majestic giants. Don’t miss this ocean spectacle!",
      category: "Seasonal events",
      image: "https://craftypixels.com/placeholder-image/200x200/3048bf/8f8f8f&text=Whale+Watching",
      link: "/events/whale-watching",
    },
    {
      id: 3,
      title: "Learn to surf",
      description: "Calling all experienced surfers! Tame the wild beauty of Bora Bora's hidden breaks. Unleash your inner wave warrior and carve your own legend in crystal-clear waters surrounded by breathtaking scenery.",
      category: "Things to Do",
      image: "https://craftypixels.com/placeholder-image/200x200/3048bf/8f8f8f&text=Surf+Lessons",
      link: "/activities/surf-lessons",
    },
    // Add more content cards as needed
  ];

  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-800 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-900 dark:text-blue-300 mb-6">What's Trending</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contentCards.map((card) => (
          <SmallContentCard
            key={card.id}
            title={card.title}
            description={card.description}
            category={card.category}
            image={card.image}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
};

export default TrendingContent;
