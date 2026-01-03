import { useState } from "react"
import axios from 'axios';
import Input from "../UI/Input"
import Button from "../UI/Button"
import { useNavigate, Link } from "react-router-dom"
import { useForm } from 'react-hook-form';
import { useAuth } from "../../context/AuthContext"; // Ensure path is correct

export default function Registration() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [serverError, setServerError] = useState(null);

  //Initializing React Hook Form
  const { 
    register, 
    handleSubmit, 
    setError, 
    formState: { errors, isSubmitting } 
  } = useForm({
    mode: "onBlur" // Validates when user leaves the input
  });

  //Logic for the API request
  const onFormSubmit = async (data) => {
    setServerError(null);
    try {
      const payload = {
        user: {
          username: data.username,
          email: data.email,
          password: data.password,
        },
      };
      
      const response = await axios.post(
        "https://realworld.habsida.net/api/users",
        payload
      );
      
      // Update global auth context and redirect
      login(response.data.user);
      navigate("/");
    } catch (err) {
      if (err.response?.data?.errors) {
        // This maps server errors back to the specific input fields
        Object.entries(err.response.data.errors).forEach(([key, val]) => {
          setError(key, { type: "manual", message: `${key} ${val}` });
        });
      } else {
        setServerError("Failed to connect to the server.");
      }
    }
  };

  return (
    <div className="w-[500px] mx-auto mt-20 px-10">
      <div className="flex justify-center">
        <h1 className="font-bold text-5xl pb-10">Sign up</h1>
      </div>

      {/* Show Server/General Errors */}
      {serverError && (
        <div className="bg-red-50 text-red-500 p-4 rounded-lg mb-4 text-sm text-center">
          {serverError}
        </div>
      )}

      {/* 3. handleSubmit(onFormSubmit)  */}
      <form onSubmit={handleSubmit(onFormSubmit)} className="flex flex-col">
        <Input
          placeholder="Username"
          error={errors.username}
          {...register("username", { 
            required: "Username is required",
            minLength: { value: 3, message: "Min 3 characters" },
            maxLength: { value: 20, message: "Max 20 characters" }
          })}
        />

        <Input
          placeholder="Email Address"
          type="email"
          error={errors.email}
          {...register("email", { 
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email format"
            }
          })}
        />

        <Input
          placeholder="Password"
          type="password"
          error={errors.password}
          {...register("password", { 
            required: "Password is required",
            minLength: { value: 6, message: "Min 6 characters" },
            maxLength: { value: 40, message: "Max 40 characters" }
          })}
        />

        <Input
          placeholder="Repeat Password"
          type="password"
          error={errors.repeatPassword}
          {...register("repeatPassword", { 
            required: "Please repeat your password",
            validate: (value, formValues) => value === formValues.password || "Passwords do not match"
          })}
        />

        {/* 4. Mandatory Checkbox from Requirements */}
        <div className="py-4 border-t border-gray-100 mt-2">
          <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
            <input 
              type="checkbox" 
              className="w-4 h-4 accent-green-500"
              {...register("agreement", { required: true })} 
            />
            I agree to the processing of my personal information
          </label>
          {errors.agreement && <p className="text-red-500 text-xs mt-1 font-medium">Agreement is required</p>}
        </div>

        <div className="flex justify-end mt-4">
          <Button type="submit" disabled={isSubmitting} className="text-[18px] font-sans">
            {isSubmitting ? "Signing up..." : "Sign up"}
          </Button>
        </div>
      </form>
    </div>
  )
}