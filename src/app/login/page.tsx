'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import DarkModeSwitcher from "../_components/DarkSwitcher";
const page = () => {

  const [email, setEmail] = useState ('')
    const [password, setPassword] = useState ('')
    // const {setIsAuth} = useContext (authContext)
    const router = useRouter ()
    const handleSignIn = async ()=>{
    
        const signInData = await signIn ('credentials', {
            email:email,
            password:password,
            redirect:false
        })
        if (signInData!.error)
          toast.error (`Error: ${signInData!.error}`)
        else {
                // setIsAuth! (true)
                toast.success (`Welcome back`)
                router.refresh ()
                router.push ('/')
        }
    }
  return (
    <main className='flex justify-center items-center w-[100vw] h-[100vh] relative'>
      <div className="absolute top-8 left-8">
    <DarkModeSwitcher />
    </div>
    <div className="absolute top-8 right-8">
      <button className="primary-btn" onClick={() => router.push ('/signup')}>Signup</button>
    </div>
      <div className="flex px-6 py-8 min-w-[450px] max-w-[550px] flex-col justify-center items-center gap-4 rounded-md bg-[#F4F6FA] dark:bg-navy">
      <h1 className='text-darkNavy dark:text-white font-semibold text-[24px]'>Login to your account</h1>
      <form onSubmit={(e)=>{
            e.preventDefault ()
            handleSignIn ()
        }}>
      <div className="flex flex-col gap-3 ">
        <div className="gap-2 flex flex-col">
          <label className="text-navy dark:text-lightGray" htmlFor="email">Your Email</label>
          <input type="email" id='email' className="input-regular"  placeholder="Your email" onChange={(e)=> setEmail (e.target.value)}/>
        </div>
        <div className="gap-2 flex flex-col">
          <label className="text-navy dark:text-lightGray" htmlFor="password">Your Password</label>
          <input type="password" id="email" placeholder="Your password" className="input-regular"  onChange={(e)=> setPassword (e.target.value)}/>
        </div>
        <button className="primary-btn" type='submit'>Login</button>
      </div>
      </form>
    </div>
    </main>
  );
};


export default page