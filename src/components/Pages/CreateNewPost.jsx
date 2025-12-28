import { useState } from "react";
import Input from '../UI/Input';
import Button from "../UI/Button";
import Tag from '../UI/Tag';

export default function CreateNewPost() {
  const [formData, setFormData] = useState({
    title:'',
    description:'',
    content:''
  });

  const handleChange=(e)=>{
    const {name,value} = e.target;
    setFormData(prev=>(
      {...prev, [name]:value}
    ));
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log('submitted data: ',formData);
  }

  return (
    <div className="w-[500px] mx-auto mt-20 px-10"> {/*34px*/}
    <form onSubmit={handleSubmit}>
      <Input
        name="title"
        type="text"
        placeholder="Enter title"
        onChange={handleChange}
        value={formData.title}
      />
      <Input
        name="description"
        type="text"
        placeholder="Short description"
        onChange={handleChange}
        value={formData.description}
      />
      <Input
        className="placeholder:text-[#333333]"
        name="content"
        type="textarea"
        placeholder="Input your text"
        onChange={handleChange}
        value={formData.content}
      />
      <div className="flex gap-2">
        <Tag>React</Tag>
        <Tag>React</Tag>
        <Tag>React</Tag>
      </div>
      <div className="flex justify-end">
        <Button type='submit' className="text-[18px] font-sans">Publish Article</Button>
      </div>
      
    </form>
    </div>
  )
}
