import Link from "next/link"
import Image from "next/image"
import Author from "./_child/author"
import Fetcher from "../lib//fetcher"
import Spinner from "./_child/spinner"
import Error from "./_child/error"
const Section4 = () => {

    const {data,isLoading,error} = Fetcher('api/populer')
    
    if(isLoading) return <Spinner></Spinner> 

    if(error) return <Error></Error>
  return (
   <section className="container mx-auto md:px-20 py-16 ">
        <div className="grid lg:grid-cols-2">
            <div className="item">
                <h1 className="font-bold text-4xl py-12 ">Business category</h1>  
                <div className="flex flex-col gap-6">
                    {/* posts */}
                   {data[1]?<Posts data={data[1]}></Posts> : <></>}
                   {data[2]?<Posts data={data[2]}></Posts> : <></>}
                   {data[3]?<Posts data={data[3]}></Posts> : <></>}
                </div>
            </div>
            <div className="item">
                    <h1 className="font-bold text-4xl py-12">Travel</h1>    
                    <div className="flex flex-col gap-6">
                    {/* posts */}
                    {data[4]?<Posts data={data[4]}></Posts> : <></>}
                    {data[5]?<Posts data={data[5]}></Posts> : <></>}
                    {data[2]?<Posts data={data[2]}></Posts> : <></>}
                </div>
            </div>
        </div>
   </section>
  )
}

export default Section4

function Posts({data}){
    const{id,title,category,img,published,author} = data
    return(
        <div className="flex gap-5">
            <div className="image flex flex-col justify-start ">
                <Link href={"/"}><Image src={img || "/"} width={400} height={250} className="rounded"  /></Link>
            </div>
            <div className="info flex justify-center flex-col  ">
                <div className="cat">
                        <Link href={"/"} legacyBehavior><a className="text-orange-600 hover:text-orange-800">{category || "Unknown"}</a></Link>
                        <Link href={"/"} legacyBehavior><a className="text-gray-600 hover:text-gray-800">{published || "Unknown"}</a></Link>
                    </div>
                    <div className="title">
                        <Link href={"/"} legacyBehavior>
                        <a className="text-xl  font-bold text-gray-800 hover:text-gray-600">{title || "Unknown"}</a>
                        </Link>
                        {author ? <Author {...author}></Author> : <></>}  
                    </div>
            </div>
        </div>
    )
}