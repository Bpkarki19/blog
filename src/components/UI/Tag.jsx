export default function Tag({ children,
    clickable = false, 
    className = "" }) {
  const baseStyles = "border border-[#AAAAAA] text-[#AAAAAA] font-semibold px-3 py-0.5 rounded-full text-[12.8px] transition-colors";
  
  // If clickable, we add hover effects and a pointer cursor
  const interactionStyles = clickable 
    ? "hover:bg-gray-100 hover:text-gray-600 cursor-pointer" 
    : "cursor-default";

  return (
    <span className={`${baseStyles} ${interactionStyles} ${className}`}>
      {children}
    </span>
  );
}