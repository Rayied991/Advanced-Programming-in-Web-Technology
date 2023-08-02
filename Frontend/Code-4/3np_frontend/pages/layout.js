import Header from "./header"
import Footer from "./footer"
import Navigator from "./navigator"
export default function Layout({children},props){//component
//layout parent component
  return (
    <>
    <head> 
        <title>My Web Page- {props.page}</title>
    </head>
    {/* <Header page={page}></Header> */}
    {/* <body> */}
    <Navigator></Navigator>
    {children}
    <Footer></Footer>
    {/* </body> */}
    </>
  )
}