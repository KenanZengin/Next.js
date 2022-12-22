import Link from "next/link"
import Image from "next/image"
import Author from "./_child/author"
import Fetcher from "../lib/fetcher"
import Spinner from "./_child/spinner"
import Error from "./_child/error"

//import getPost from "../lib/helper"

const Section2 = () => {
   // getPost(8).then(res=>console.log(res)) // dataları görebiliriz
    const {data,isLoading,error} = Fetcher('api/posts')
   
    
    if(isLoading) return <Spinner></Spinner> 

    if(error) return <Error></Error>

   return (
   <section className="container mx-auto md:px-20 py-10">
        <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>    
        {/* grid colums */}
        <div className="grid md:grid-cols-3 lg:grid:cols-4 gap-14">
           {
            data.map((value,index)=>(
                <Posts data={value} key={index}>
                    
                </Posts>
            ))
           }
        </div>
   </section>
  )
}

function Posts({data}){
    const{id,title,category,img,published,author,description} = data

    return(
        <div className="item">
            <div className="images">
            <Link href={`/posts/${id}`}  legacyBehavior><a>
                <Image src={img || "/"} width={500} height={350} className="rounded-sm"  />
            </a></Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
                <div className="cat">
                    <Link href={`/posts/${id}`} legacyBehavior><a className="text-orange-600 hover:text-orange-800">{category || "Unknown"}</a></Link>
                    <Link href={`/posts/${id}`} legacyBehavior><a className="text-gray-600 hover:text-gray-800">{published || "Unknown"}</a></Link>
                </div>
                <div className="title">
                    <Link href={`/posts/${id}`} legacyBehavior>
                    <a className="text-xl  font-bold text-gray-800 hover:text-gray-600">{title || "Unknown"}</a>
                    </Link>
                    <p className="text-gray-500 py-3">{description || "description"}</p>
                    {author ? <Author></Author> : <></>}
                </div>
            </div>
        </div>
    )
}




export default Section2