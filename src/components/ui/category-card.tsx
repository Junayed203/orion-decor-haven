
import { Link } from "react-router-dom";

interface CategoryCardProps {
  id: string;
  name: string;
  image: string;
  count: number;
}

export function CategoryCard({ id, name, image, count }: CategoryCardProps) {
  return (
    <Link to={`/categories/${id}`} className="block">
      <div className="group relative h-[200px] overflow-hidden rounded-lg shadow-sm border border-orion-border card-hover">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            // Fallback to a placeholder if the image fails to load
            const target = e.target as HTMLImageElement;
            target.src = "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
          <h3 className="text-white text-lg font-medium">{name}</h3>
          <p className="text-white/80 text-sm">{count} products</p>
        </div>
      </div>
    </Link>
  );
}
