
import Header from '../_components/Header'

interface props {
    children:React.ReactNode
}
const Layout:React.FC<props> = ({children}) => {
    return <div className='flex flex-col w-full h-full'>
        <Header/>
        {children}
    </div>
}

export default Layout