import Link from "next/link";
import Image from 'next/image';
import Layout from "./layout";
import dynamic from "next/dynamic";//server side rendering will be off



// const Layout=dynamic(()=>import('./Layout/layout'),{
//   ssr:false,
// })
// const Title=dynamic(()=>import('./Layout/title'),{
//   ssr:false,
// })
 
export default function Home(){
    return (
    <>
    <Layout page="Home">
    <h1>Hello World</h1>

     <Link href="about">About</Link><br></br>

     </Layout>

    </>
  )
}
