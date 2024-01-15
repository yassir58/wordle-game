import { useSession } from "next-auth/react"

const useAuth = ()=> {
    const {data:session} = useSession ()


    return {user:session?.user}
}

export default useAuth