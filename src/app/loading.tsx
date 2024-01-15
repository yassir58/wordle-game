'use client'
import { Blocks } from "react-loader-spinner";


const loading = () => {
    return <div className="flex h-[100vh] w-[100vw] items-center justify-center">
    <Blocks
      height="80"
      width="80"
      color="#A729F5"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      visible={true}
    />
  </div>
}

export default loading