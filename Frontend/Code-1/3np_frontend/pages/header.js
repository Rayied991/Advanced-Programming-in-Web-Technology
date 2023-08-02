//logo,images
import Layout from "./layout"
import Image from "next/image"
export default function Header(){
    return(
        <>
        
        <h1>Img:</h1>
        <Image
        src="/pic.png"
        alt="Picture of the Author"
        width={20}
        height={20}
        />

        
        
        </>
    )
}