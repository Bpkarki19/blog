import api from "../../services/api";
import Input from '../UI/Input';
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function EditPost() {
  
  const navigate = useNavigate();
  

  const {
    register,
    handleSubmit,
   
    formState: { errors, isSubmitting }
  } = useForm({ 
    mode: "onChange" // Errors will show as you type
  });

  

  const onUpdate = async (data) => {
    try {
      const payload = {
        article: {
          title: data.title,
          description: data.description,
          body: data.body,
          tagList: data.tags ? data.tags.split(',').map(tag => tag.trim()) : []
        }
      };
      const response = await api.post(`/articles`, payload);
      navigate(`/articles/${response.data.article.slug}`);
    } catch (error) {
      console.error(error);
      alert("Update failed.");
    }
  };



  return (
    <div className="w-[500px] mx-auto mt-20 px-10">
      <form onSubmit={handleSubmit(onUpdate)}>
        
        <Input
          placeholder="Enter title"
          error={errors.title} 
          {...register("title", {
            required: "Title is required",
            minLength: { value: 3, message: "Min 3 characters" }
          })}
        />

        <Input
          placeholder="Short description"
          error={errors.description} 
          {...register("description", {
            required: "Description is required",
            minLength: { value: 10, message: "Min 10 characters" }
          })}
        />

        <Input
          className="placeholder:text-[#333333]"
          type="textarea"
          placeholder="Input your text"
          error={errors.body} 
          {...register("body", {
            required: "Body is required",
            minLength: { value: 20, message: "Body must be at least 20 characters" }
          })}
        />

        <Input 
          className="flex gap-2"
          placeholder="Enter tags (separated by commas)"
          error={errors.tags} 
          {...register("tags", {
            required: "At least one tag is required"
          })}
        />
          
        <div className="flex justify-end pt-2">
          <Button 
            type='submit' 
            disabled={isSubmitting}
            className={`text-[18px] font-sans ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? "Updating..." : "Update Article"}
          </Button>
        </div>
      </form>
    </div>
  );
}