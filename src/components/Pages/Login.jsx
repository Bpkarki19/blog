import { useState } from "react";
import Input from '../UI/Input';
import Button from "../UI/Button";


export default function Login() {
  const [formData, setFormData] = useState({
    username:'',
    password:'',
    
  });

  const handleChange=(e)=>{
    const {name,value} = e.target;
    setFormData(prev=>(
      {...prev, [name]:value}
    ));
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    
  }

  return (
    <div className="w-[500px] mx-auto mt-20 px-10"> {/*34px*/}
    <div className="flex justify-center"><h1 className="font-bold text-5xl pb-5">Sign in</h1></div>
    <form onSubmit={handleSubmit}>
      <Input
        name="title"
        type="text"
        placeholder="Username"
        onChange={handleChange}
        value={formData.title}
      />
      <Input
        name="description"
        type="text"
        placeholder="password"
        onChange={handleChange}
        value={formData.description}
      />
      
      <div className="flex justify-end">
        <Button type='submit' className="text-[18px] font-sans">Sign in</Button>
      </div>
      
    </form>
    </div>
  )
}
