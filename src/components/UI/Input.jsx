export default function Input({type,className='', ...props}){
    const borderProperty ='border-[#AAAAAA] border'
    const baseStyles = "w-full rounded-lg px-4 py-3 text-lg focus:border-green-500 outline-none transition-all mb-4 appearance-none";
    if (type === 'textarea'){
        return<textarea {...props} className={`${baseStyles} ${borderProperty} h-40 ${className} resize-none`}/>
    }
    return(
        <input type={type} {...props} className={`${baseStyles} ${borderProperty} ${className}`}/>
            
    )
}
    