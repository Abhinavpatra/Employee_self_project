import { useState } from "react";

export default function Login() {
    const[email, setEmail] = useState ("");
    const[password, setPassword] = useState (""); 

    //two way binding
    const submitHandler=(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log(e.target);
        console.log("Form Submitted");
        console.log("email: ",email);
        console.log("password:",password)
    }


  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="border-2 border-emerald-600 rounded-xl p-10">
        <form 
        action="" 
        className="flex flex-col items-center"
        onSubmit={(e)=>{
            submitHandler(e);
        }}
        >
            <input 
            onChange={(e)=>{
                setEmail(e.target.value)

            }}
            required 
            className=" text-white border-2 outline-none m-2 px-3 py-4 border-emerald-300 cursor-text rounded-full placeholder:text-slate-300 "
            type="email"
            placeholder="Enter Email"
            value={email}
              />
            <input 
            onChange={(e)=>{
                setPassword(e.target.value)

            }}
            required 
            className="text-white border-2 outline-none m-2 px-3 py-4 border-emerald-300 cursor-text rounded-full placeholder:text-slate-300 "  
            type="password" 
            placeholder="Enter Password"
            value={password}
            />
            <button  className=" text-white border-none outline-none mt-4 px-10 py-2 bg-emerald-300 rounded-full hover:bg-emerald-400 " >Log In </button>
        </form >
      </div>
    </div>
  )
}

//form default behaviour is to reload, whenever we say anything
