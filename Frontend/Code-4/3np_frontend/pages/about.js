import Link from "next/link";
import Image from 'next/image';
import Layout from "./layout";

export default function About(){
    return (
        <>
        <Layout page="About">
        <h1>About Us</h1>
        {/* <a href="/">Home</a><br></br> */}
        <Link href="/"> Home</Link><br></br>
        <Image
        src="/pic.png"
        alt="Picture of the Author"
        width={20}
        height={20}
        />
</Layout>
        </>
    )
}