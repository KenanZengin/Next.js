import { ImFacebook , ImTwitter , ImYoutube } from "react-icons/im";
import Link from "next/link";
const Header = () => {
  return (
    <header className="bg-gray-50">
        <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
            <div className="md:flex-none w-96 order-2 sm:order-1">
                <input type="text" placeholder="Search..." className="input-text" />
            </div>
            <div className="shrink w-80 sm:order-2">
              <Link href={"/"} legacyBehavior>
                    <a className="font-bold uppercase text-3xl" >Design</a>
              </Link>
            </div>
            <div className="w-96 order-3 flex justify-center">
                <div className="flex gap-6">
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
            </div>
        </div>

    </header>
)
 
}

export default Header