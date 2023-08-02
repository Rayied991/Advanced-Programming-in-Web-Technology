import { Router, useRouter } from "next/router"

export default function Product(){//dynamic routing
    const router=useRouter();
    const postid=router.query.id;
    // console.log(postid)
    return(
        <>
        Product id:{postid}
        </>
        
        
    )
}