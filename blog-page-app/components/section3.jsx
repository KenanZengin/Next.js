import {Swiper,SwiperSlide} from "swiper/react"
import Link from "next/link"
import Image from "next/image"
import Author from "./_child/author"
import Fetcher from "../lib//fetcher"
import Spinner from "./_child/spinner"
import Error from "./_child/error"

import 'swiper/css';
const Section3 = () => {
    const {data,isLoading,error} = Fetcher('api/populer')
    
    if(isLoading) return <Spinner></Spinner> 

    if(error) return <Error></Error>

    return (
   <section className="container mx-auto md:px-20 py-16">
        <h1 className="font-bold text-4xl py-12 text-center">Populer Posts</h1>    
        {/* swiper */} 
        <Swiper
        
         breakpoints={{
            640:{
                slidesPerView : 2,
                spaceBetween : 30
            }
         }}
        >

            {data.map((value,index)=>(
              <SwiperSlide key={index}>
               <Posts data={value}>

               </Posts>
              </SwiperSlide>
            ))}
        </Swiper>

   </section>
  )
}

export default Section3
function Posts({data}){
    const{id,title,category,img,published,author,description} = data
    return(
        <div className="grid">
            <div className="images">
            <Link href={"/"}  legacyBehavior><a>
               
                        <Image src={img || "/"} width={600} height={400} />
                   
                   
               
            </a></Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
                <div className="cat">
                    <Link href={"/"} legacyBehavior><a className="text-orange-600 hover:text-orange-800">{category || "Unknown"}</a></Link>
                    <Link href={"/"} legacyBehavior><a className="text-gray-600 hover:text-gray-800">{published || "Unknown"}</a></Link>
                </div>
                <div className="title">
                    <Link href={"/"} legacyBehavior>
                    <a className="text-3xl md:text-:4xl  font-bold text-gray-800 hover:text-gray-600">Your most unhappy customer are your greatest source of learning</a>
                    </Link>
                    <p className="text-gray-500 py-3">{description || "description"}</p>
                    {author ? <Author {...author}></Author> : <></>}   
                </div>
            </div>
        </div>
    )
}