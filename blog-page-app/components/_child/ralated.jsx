import Link from "next/link"
import Image from "next/image"
import Author from "./author"
import Fetcher from "../../lib/fetcher"
import Spinner from "./spinner"
import Error from "./error"
const Ralated = () => {
    const {data,isLoading,error} = Fetcher('api/posts')
   
    
    if(isLoading) return <Spinner></Spinner> 

    if(error) return <Error></Error>

  return (
   <section className="pt-20">
        <h1 className="font-bold text-3xl py-10">Related</h1>    
        <div className="flex flex-col gap-10">
            {data.map((value,index)=>(
                <Posts key={index} data={value}>
                </Posts>
            ))}
        </div>
   </section>
  )
}

export default Ralated

function Posts({data}){
    const{id,title,category,img,published,author,description} = data
    return(
        <div className="flex gap-5">
             <div className="image flex flex-col justify-start ">
                <Link href={"/"}><Image src={img || "/"} width={400} height={150} className="rounded"  /></Link>
            </div>
            <div className="info flex justify-center flex-col  ">
                <div className="cat">
                        <Link href={"/"} legacyBehavior><a className="text-orange-600 hover:text-orange-800">{category || "Unknown"}</a></Link>
                        <Link href={"/"} legacyBehavior><a className="text-gray-600 hover:text-gray-800">{published || "Unknown"}</a></Link>
                    </div>
                    <div className="title">
                        <Link href={"/"} legacyBehavior>
                        <a className="text-xl  font-bold text-gray-800 hover:text-gray-600">{description || "description"}</a>
                        </Link>
                        {author ? <Author {...author}></Author> : <></>}
                    </div>
            </div>
        </div>
    )
}