import Link from "next/link";
import Image from 'next/image';
import Layout from "./layout";

export default function Home() {
  return (
    <>
    <Layout page="Home">
    <h1>Hello World</h1>
     {/* <a href="about">About</a><br></br> */}

     <Link href="about">About</Link><br></br>
    
     </Layout>

    </>
  )
}
