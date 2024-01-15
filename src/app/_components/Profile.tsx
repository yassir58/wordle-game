import useAuth from "~/lib/hooks/useAuth"
import ProfileIcon from "./ui/icons/profile";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

const Profile:React.FC = ({}) => {

    const {user} = useAuth ();
    const router = useRouter ()

    const handleLogout = () => {
        signOut({
          redirect: true,
          callbackUrl: `http://localhost:3000/login`,
        });
      };
    return (<div className='flex justify-center items-center w-full h-full'>

    {
        user ? 
        <div className="flex flex-col gap-4 justify-center items-center">
            <div className='flex flex-col gap-3 mb-4 justify-center items-center'>
                <div className='w-[50px] h-[50px] rounded-md bg-[#f6e6ff] flex justify-center items-center'>
                <ProfileIcon />
                </div>
                <h1 className="text-[25px] font-semibold text-navy dark:text-white">
          {user.name}
        </h1>
            </div>
            <button className='button-danger' onClick={handleLogout}>Logout</button>
        </div>
        :
        <div className='flex flex-col gap-4 justify-center items-center mb-6'>
            <p className='text-mediumGray dark:text-lightGray text-center'>Login to your account to save your progress</p>
            <button className='primary-btn w-full' onClick={()=> router.push ('/login')}>Login</button>
            <p className='text-mediumGray dark:text-lightGray text-center'>If you don't have an account</p>
            <button className='primary-btn w-full' onClick={()=> router.push ('/signup')}>Signup</button>
        </div>
    }
    </div>)
}

export default Profile