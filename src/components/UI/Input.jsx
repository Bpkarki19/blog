import { forwardRef } from "react";


const Input = forwardRef(({ type, className = '', error, ...props }, ref) => {
    
  
    const borderProperty = error ? 'border-red-500 border-2' : 'border-[#AAAAAA] border';
    
    const baseStyles = "w-full rounded-lg px-4 py-3 text-lg focus:border-green-500 outline-none transition-all mb-1 appearance-none";

    return (
        <div className="w-full mb-4"> {/* Container to hold input + error message */}
            {type === 'textarea' ? (
                <textarea 
                    {...props} 
                    ref={ref} 
                    className={`${baseStyles} ${borderProperty} h-40 ${className} resize-none`}
                />
            ) : (
                <input 
                    type={type} 
                    {...props} 
                    ref={ref} 
                    className={`${baseStyles} ${borderProperty} ${className}`}
                />
            )}

            {/* Error Message Display */}
            {error && (
                <span className="text-red-500 text-xs font-medium ml-1">
                    {error.message}
                </span>
            )}
        </div>
    );
});

export default Input;