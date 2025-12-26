export default function Input({type,className='', ...props}){

    const baseStyles = "w-full border border-gray-300 rounded-lg px-4 py-3 text-lg focus:border-green-500 outline-none transition-all mb-4";
    if (type === 'textarea'){
        return<textarea {...props} className={`${baseStyles} h-40 ${className}`}/>
    }
    return(
        <input type={type} {...props} className={`${baseStyles} ${className}`}/>
            
    )
}
    