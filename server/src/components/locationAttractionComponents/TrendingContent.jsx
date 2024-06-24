import React from "react";
import SmallContentCard from "./SmallContentCard";

const TrendingContent = () => {
    const contentCards = [
      {
        id: 1,
        title: "Where to Eat and Stay Around Minute Maid Park",
        description: "Take me out to the ballgame, but show me where to eat and stay to make the experience a grand slam. That's our game plan! Take a swing at...",
        category: "Sports",
        image: "https://craftypixels.com/placeholder-image/200x200/3048bf/8f8f8f&text=Minute+Maid+Park",
        link: "#",
      },
      {
        id: 2,
        title: "Houston Is Now Closer to Connecticut Than Ever Before",
        description: "Houston's cultural reach is expanding rapidly, offering more than just great BBQ. Explore what makes Houston a must-visit destination...",
        category: "Happening Now",
        image: "https://craftypixels.com/placeholder-image/200x200/3048bf/8f8f8f&text=Houston",
        link: "#",
      },
      {
        id: 3,
        title: "July 4th Weekend Itinerary",
        description: "Celebrate Independence Day with our curated list of the best events, fireworks shows, and family activities to make this a memorable holiday...",
        category: "Things to Do",
        image: "https://craftypixels.com/placeholder-image/200x200/3048bf/8f8f8f&text=July+4th",
        link: "#",
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
    )
}

export default TrendingContent;