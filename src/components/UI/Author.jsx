import { User } from 'lucide-react';

export default function Author({ 
  name, 
  date, 
  image, 
  variant = 'default'
}) {
  
  
  const avatarSize = variant === 'large' ? 'w-10 h-10' : 'w-8 h-8';
  const nameSize = variant === 'large' ? 'text-base' : 'text-sm';

  return (
    <div className="flex items-center gap-2">
      {/* Avatar Image or Placeholder Icon */}
      {image ? (
        <img 
          src={image} 
          alt={name} 
          className={`${avatarSize} rounded-full object-cover bg-gray-100`} 
        />
      ) : (
        <div className={`${avatarSize} bg-gray-100 rounded-full flex items-center justify-center`}>
          <User size={variant === 'large' ? 24 : 18} className="text-green-500" />
        </div>
      )}

      {/* Name and Date */}
      <div className="flex flex-col">
        <span className={`text-green-500 font-bold ${nameSize} leading-tight hover:underline cursor-pointer`}>
          {name}
        </span>
        <span className="text-gray-400 text-[10px]">
          {date}
        </span>
      </div>
    </div>
  );
}