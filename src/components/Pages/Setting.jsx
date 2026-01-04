import { useAuth } from "../../context/AuthContext"
import { useForm } from "react-hook-form"
import api from "../../services/api"
import { useNavigate } from "react-router-dom"
import Button from "../UI/Button"
import Input from "../UI/Input"


export default function Setting() {
  const { user, login, logout } = useAuth()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode:"all",
    defaultValues: {
      username: user?.username || "",
      email: user?.email || "",
      bio: user?.bio || "",
      image: user?.image || "",
      password: "",
    },
  })

  const onUpdate = async (data) => {
    try {
      const payload = { ...data }
      if (!payload.password) delete payload.password
      const res = await api.put(`/user`, { user: payload });
      login(res.data.user) //update global state
      alert("settings updated")
    } catch (error) {
      console.error("Update Error:",error);
      const serverError = error.response?.data?.errors;
      alert(serverError ? JSON.stringify(serverError):"Failed to update profile");
    }
  }

  const handleLogout = () => {
    logout();
    navigate("/", {replace: true});
  };

  return (
    <div className="flex-col w-[480px] mx-auto">
      <div className="flex justify-center">
        <h1 className="font-bold text-5xl pb-5">Your settings</h1>
      </div>
      <form onSubmit={handleSubmit(onUpdate)} className="space-y-4">
        <Input
          type="text"
          error={errors.username}
          placeholder="username"
          {...register("username", { required: "Username is required" })}
        />
        <Input
          type="email"
          placeholder="Email Address"
          error={errors.email}
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
          })}
        />
        <Input
          className="h-[100px] placeholder:text-[#333333]"
          type="textarea" // text area keeps it above
          placeholder="Input your comment"
          {...register("bio")}
        />
        <Input
          type="text"
          placeholder="Avatar image (URL)"
          {...register("image")}
        />
        <div className="flex justify-end">
          <Button
            type="submit"
            disabled={isSubmitting} //important
            className="text-[18px] font-normal" //400 = normal
          >
            {isSubmitting ? "updating..." : "update Settings"}
          </Button>
        </div>
        <div>
          <button
            type="button" //important : type button will not submit form
            onClick={handleLogout}
            className="border border-red-600 rounded-md p-0.5 px-3 text-red-600 "
          >
            Or click here to logout
          </button>
        </div>
      </form>
    </div>
  )
}
