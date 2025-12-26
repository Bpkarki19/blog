import Input from "../UI/Input"
import Button from "../UI/Button"
import { useState } from "react"

export default function Registration() {

    const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const {name,value} = e.target;
    setFormData((prev)=>{
        return {
          ...prev,
          [name]:value,
        };
    });

  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log('form submited')
  }


  return (
    <form className="registration" onSubmit={handleSubmit}>
      <span>Sign up</span>
      <Input
        type="text"
        name="userName"
        placeholder="UserName"
        value={formData.username}
        onChange={handleChange}
      />
      <Input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
      />
      <Input
        type="password"
        name="password"
        placeholder="passowrd"
        value={formData.password}
        onChange={handleChange}
      />
      <Button type="submit" variant="primary" size="lg">Create Account </Button>
    </form>
  )
}
