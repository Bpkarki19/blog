import { useState } from "react"
import Input from '../UI/Input'
import Button from "../UI/Button";

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
    <div className="max-w-3xl mx-auto mt-20 px-10 py-10 bg-white shadow-md rounded-lg border border-gray-100">
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
        type="textarea"
        placeholder="Short description"
        onChange={handleChange}
        value={formData.description}
      />
      <Input
        name="content"
        type="text"
        placeholder="Input your text"
        onChange={handleChange}
        value={formData.content}
      />
      <Button type='submit'>
        Submit
      </Button>
    </form>
    </div>
  )
}
