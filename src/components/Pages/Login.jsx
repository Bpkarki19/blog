import { useState } from "react"
import Input from "../UI/Input"
import Button from "../UI/Button"
import api from "../../services/api"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { useAuth } from "../../context/AuthContext";


export default function Login() {
  const {login} = useAuth();
  const navigate = useNavigate()
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "all" })

  const onUpdate = async (data) => {
    try {
      const payload = {
        user: {
          email: data.email,
          password: data.password,
        },
      }
      const response = await api.post(`/users/login`, payload)
      const user = response.data.user //bug fixed!
      login(user);
      console.log("login successful");
      navigate("/");
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setError("invalid email or password")
      } else {
        setError("some thing went wrong. please try again.")
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-[500px] mx-auto mt-20 px-10">
      {/*34px*/}
      <div className="flex justify-center">
        <h1 className="font-bold text-5xl pb-5">Sign in</h1>
      </div>
      {/* Display Errors */}
      {error && (
        <div className="bg-red-50 text-red-500 p-4 rounded-lg mb-4 text-sm text-center font-medium">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit(onUpdate)}>
        <Input
          {...register("email", { 
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email format"
            }
          })}
          error = {errors.email}
          type="email"
          placeholder="Email address"
        />
        <Input
          {...register("password", { 
            required: "Password is required",
            minLength: { value: 6, message: "Min 6 characters" },
            maxLength: { value: 40, message: "Max 40 characters" }
          })}
          error={errors.password}
          type="password"
          placeholder="password"
        />

        <div className="flex justify-end">
          <Button
            type="submit"
            disabled={loading} //dissable when loading
            className="text-[18px] font-sans"
          >
            {isSubmitting ? "signing in..." : "Sign in"}
          </Button>
        </div>
      </form>
    </div>
  )
}
