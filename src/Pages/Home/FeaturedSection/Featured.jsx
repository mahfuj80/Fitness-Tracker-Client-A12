import FeaturedCard from '../../../Components/HomePage/FeaturedCard';
import featuredItems from './FeaturedData/featured';
const Featured = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-2">
      {featuredItems?.map((featuredItem) => (
        <FeaturedCard
          key={featuredItem?.id}
          featuredItem={featuredItem}
        ></FeaturedCard>
      ))}
    </div>
  );
};

export default Featured;
