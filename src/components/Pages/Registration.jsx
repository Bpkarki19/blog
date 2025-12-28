import { useState } from "react"
import axios from 'axios';
import Input from "../UI/Input"
import Button from "../UI/Button"
import { useNavigate } from "react-router-dom"

export default function Registration() {
  const navigate = useNavigate()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(null)
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('successful');
    console.log(formData);
    setLoading(true)
    setError(null)
    try {
      const payload = {
        user: {
          username: formData.username,
          email: formData.email,
          password: formData.password,
        },
      }
      const response = await axios.post(
        "https://realworld.habsida.net/api/users",
        payload
      )
      console.log("success", response.data.user)
      //response.data.user.token to localStorage
      navigate("/")
    } catch (err) {
      if (err.response && err.response.data && err.response.data.errors) {
        const errors = err.response.data.errors
        //converting api error object into string
        const errMsg = Object.entries(errors)
          .map(([key, val]) => `${key} ${val}`)
          .join(",")
        setError(errMsg)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-[500px] mx-auto mt-20 px-10">
      {" "}
      {/*34px*/}
      <div className="flex justify-center">
        <h1 className="font-bold text-5xl pb-5">Sign up</h1>
      </div>
      {/* Show Error Message if any */}
      {error && (
        <ul className="bg-red-50 text-red-500 p-4 rounded-lg mb-4 list-disc list-inside">
          <li>{error}</li>
        </ul>
      )}
      <form onSubmit={handleSubmit}>
        <Input
          name="username"
          type="text"
          placeholder="Username"
          onChange={handleChange}
          value={formData.username}
        />
        <Input
          name="email"
          type="email"
          placeholder="Email Address"
          onChange={handleChange}
          value={formData.email}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          value={formData.password}
        />
        <Input
          name="repeatPassword"
          type="text"
          placeholder="Repeat Password"
          onChange={handleChange}
          value={formData.description}
        />

        <div className="flex justify-end">
          <Button type="submit" className="text-[18px] font-sans">
            Sign up
          </Button>
        </div>
      </form>
    </div>
  )
}
