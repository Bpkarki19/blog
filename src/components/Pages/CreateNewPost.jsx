import api from "../../services/api";
import { useState } from "react"; 
import Input from '../UI/Input';
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";

export default function CreateNewPost() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title:'',
    description:'',
    content:'',
    tags:''
  });

  const handleChange=(e)=>{
    const {name,value} = e.target;
    setFormData(prev=>(
      {...prev, [name]:value}
    ));
  };

  const handleSubmit= async (e)=>{
    e.preventDefault();
    console.log('submitted data: ',formData);
    const payload = {
      article:{
        title:formData.title,
        description:formData.description,
        body:formData.body,
        tags:formData.tags.split(',').map(tag=>tag.trim())//"a,b"=>['a','b']npm 
      }

    };
    const sendData = async ()=>{
      try{
        const response = await api.post('/articles',payload);
        console.log('successful new post',response);
        navigate(`/articles/${response.data.article.slug}`);//redirecting to new article page 



      }catch(error){
        console.error("Post failed:",error.response?.data || error.message);
        alert("Failed to creae post. Are you logged in?")
      }
      
    };
    sendData();
    

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
        value={formData.body}
      />
      <Input 
      name="tags"
      className="flex gap-2"
      type="text"
      placeholder="Enter tags (separated by commas)"
      onChange={handleChange}
      value={formData.tags}
      />
        
     
      <div className="flex justify-end">
        <Button type='submit' className="text-[18px] font-sans">Publish Article</Button>
      </div>
      
    </form>
    </div>
  )
}
