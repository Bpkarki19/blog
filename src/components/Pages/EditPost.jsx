import api from "../../services/api";
import { useEffect, useState } from "react"; 
import Input from '../UI/Input';
import Button from "../UI/Button";
import { useNavigate, useParams } from "react-router-dom";

export default function EditPost() {
  const {slug} = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title:'',
    description:'',
    body:'',
    tags:''
  });
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const fetchArticle = async()=>{
      try{
        const response = await api.get(`/articles/${slug}`);
        const article = response.data.article;
        setFormData({
          title:article.title,
          description:article.description,
          body:article.body,
          tags:article.tagList ? article.tagList.join(',') : ''
        });
      }catch(error){
        console.error("Failed to fetch article", error);
        alert("Article not found.");
      }finally{
        setLoading(false);
      }
    }
    fetchArticle();
  },[slug]);

  const handleChange=(e)=>{
    const {name,value} = e.target;
    setFormData(prev=>(
      {...prev, [name]:value}
    ));
  };

  
  const handleSubmit= async (e)=>{
    e.preventDefault();
    await onUpdate(); 
  }

  const onUpdate = async () => {
    try {
        const payload = {
            article: {
                title: formData.title,
                description: formData.description,
                body: formData.body,
             
                tags: formData.tags ? formData.tags.split(',').map(tag => tag.trim()) : []
            }
        };
        const response = await api.put(`/articles/${slug}`, payload);
        navigate(`/articles/${response.data.article.slug}`);
    } catch(error) {
        console.error("update failed:", error.response?.data);
        alert("Update failed. Please check your inputs.");
    }
  };

  if (loading) return <div className="text-center py-20">Loading article data...</div>

  return (
    <div className="w-[500px] mx-auto mt-20 px-10">
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
        name="body"
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