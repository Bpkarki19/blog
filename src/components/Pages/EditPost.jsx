import api from "../../services/api";
import { useEffect, useState } from "react"; 
import Input from '../UI/Input';
import Button from "../UI/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function EditPost() {
  const {slug} = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  //Initializing react hook form
  const {
    register,
    handleSubmit,
    reset,//used to fill the form after fetching data
    formState:{ errors, isSubmitting}
  } = useForm({mode:"onBlur"});

  useEffect(()=>{
    const fetchArticle = async()=>{
      try{
        const response = await api.get(`/articles/${slug}`);
        const article = response.data.article;
        reset({
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
  },[slug, reset]);

 



  const onUpdate = async (data) => {
    try {
        const payload = {
            article: {
                title: data.title,
                description: data.description,
                body: data.body,
             
                tags: data.tags ? data.tags.split(',').map(tag => tag.trim()) : []
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
    <form onSubmit={handleSubmit(onUpdate)}>
      <Input
        placeholder="Enter title"
        error = {errors.title?.message}
        {...register("title",{
          required:"Title is required",
          minLength:{value:3, message:"Min 3 characters"},
          maxLength:{value:50, message:"Max 50 characters"},
      })}
      />
      <Input

        {...register("description",{
          required:"Title is required",
          minLength:{val:15, message:"Min 15 characters"},
          maxLength:{val:100, message: "Max 100 character"}
        })}
        placeholder="Short description"
        error = {errors.description?.message}
      />
      <Input
        className="placeholder:text-[#333333]"
        error = {errors.body?.message}
        {...register("body",{
          required:"Body is required",
          minLength:{val:15, message:"Min 15 characters"},
          maxLength:{val:200, message: "Max 200 character"}

        })}
        type="textarea"
        placeholder="Input your text"
        
      />
      <Input 
        {...register("tags",{
          required:"Tags are required",
        })}
        className="flex gap-2"
        placeholder="Enter tags (separated by commas)"
      />
        
      <div className="flex justify-end">
        <Button type='submit' className="text-[18px] font-sans">
          {isSubmitting ? "Updating...": "Update Article"}</Button>
      </div>
    </form>
    </div>
  )
}