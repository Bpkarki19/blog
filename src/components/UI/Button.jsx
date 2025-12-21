export default function Button({ 
  children, 
  variant = 'primary',
  size = 'md',        
  className = '',     
  ...props            
}) {
  
  // 1. Base styles that every button has
  const baseStyles = "inline-flex items-center justify-center font-medium transition-colors rounded shadow-sm focus:outline-none";

  // 2. Variant styles (Colors)
  const variants = {
    primary: "bg-green-500 text-white hover:bg-green-600 border border-transparent",
    outline: "border border-green-500 text-green-500 hover:bg-green-50",
    secondary: "border border-gray-300 text-gray-500 hover:bg-gray-50 bg-white",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  // 3. Size styles (Padding & Font)
  const sizes = {
    sm: "px-2 py-1 text-xs gap-1",
    md: "px-4 py-2 text-sm gap-2",
    lg: "px-6 py-3 text-base gap-3",
  };

  
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}