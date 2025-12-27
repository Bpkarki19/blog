import Button from "../UI/Button"
import Input from "../UI/Input"
export default function Setting() {
  return (
    <div className="flex-col w-[480px] mx-auto">
      <h1 className="font-bold text-5xl pb-5">Your setting</h1>
      <form>
        <Input name="username" type="text" placeholder="username" />
        <Input name="email" type="email" placeholder="Email Address" />
        <Input
          className="h-[100px]"
          name="username"
          type="text"
          placeholder="Input your comment"
        />
        <Input name="avatar" type="text" placeholder="Avatar image (URL)" />
        <div className="flex justify-end">
          <Button>Update Settings</Button>
        </div>
        <div>
          <button className="border border-red-600 rounded-md p-0.5 px-3 text-red-600 ">Or click here to logout</button>
        </div>
      </form>
    </div>
  )
}
