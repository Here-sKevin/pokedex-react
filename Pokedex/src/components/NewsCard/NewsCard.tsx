import { FC } from 'react';
import { Card } from '../ui/card';

interface NewsCardProps {
  title: string;
  image: string;
  description: string;
  url: string;
}

const NewsCard: FC<NewsCardProps> = ({ title, image, description, url }) => {
  return (
    <Card className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block w-full text-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md"
        >
          Read more
        </a>
      </div>
    </Card>
  );
};

export default NewsCard;
