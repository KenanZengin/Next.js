import Link from "next/link"
import { ImFacebook , ImTwitter , ImYoutube } from "react-icons/im";
import Newslatter from "./_child/newslatter";
const Footer = () => {
  const bg ={
    backgroundImage : "url('/images/9.jpg')",
    backgroundRepeat : 'no-repeat',
    backgroundPosition : 'bottom left',
    


   
  }


  return (
    <footer className="bg-gray-50"  style={bg}>
      <Newslatter />
      <div className="container mx-auto justify-center flex py-12">
        <div className="py-5">
          <div className="flex gap-6 justify-center">
            <Link href={"/"}  legacyBehavior>
              <a><ImFacebook color="#888888"/></a>
            </Link>
            <Link href={"/"}  legacyBehavior>
              <a><ImTwitter  color="#888888"/></a>
            </Link >
            <Link href={"/"}  legacyBehavior>
              <a><ImYoutube  color="#888888"/></a>
            </Link>
          </div>
          <p className="py-5 text-gray-400">Copyright @2022 All right reserved | This template is made with by Daily Tuition</p>
          <p className="text-gray-400 text-center ">Terms & Condition</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer