import { useState } from "react"
import Input from "../UI/Input"
import Button from "../UI/Button"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

export default function Login({onLogin}) {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  


  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    //console.log(formData);
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const payload = {
        user: {
          email: formData.email,
          password: formData.password,
        },
      }
      const response = await axios.post(
        "https://realworld.habsida.net/api/users/login",
        payload
      )
      const user = response.data.user;//bug fixed!
      localStorage.setItem('user',JSON.stringify(user));
      localStorage.setItem('token',user.token);
      if (onLogin) onLogin(user);
      console.log("Login successful");
      navigate("/")
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
      {/* 4. Display Errors */}
      {error && (
        <div className="bg-red-50 text-red-500 p-4 rounded-lg mb-4 text-sm text-center font-medium">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <Input
          name="email"
          type="email"
          placeholder="Email address"
          onChange={handleChange}
          value={formData.email}
        />
        <Input
          name="password"
          type="password"
          placeholder="password"
          onChange={handleChange}
          value={formData.password}
        />

        <div className="flex justify-end">
          <Button type="submit" 
          disabled={loading} //dissable when loading
          className="text-[18px] font-sans">
            Sign in
          </Button>
        </div>
      </form>
    </div>
  )
}
