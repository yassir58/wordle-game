"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Blocks } from "react-loader-spinner";

export default async function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/game");
  }, []);
  return (
    <div className="flex h-[100vh] w-[100vw] items-center justify-center">
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
  );
}
