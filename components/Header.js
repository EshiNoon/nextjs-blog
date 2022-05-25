import Link from "next/link";
import Image from "next/image";
import {
    HeartIcon,
    UserGroupIcon,
    PaperAirplaneIcon,
    MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

function Header() {
    return (
        <div className="shadow-sm border-b bg-white sticky top-0 z-50">
            <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">

            {/* left */}
                <div className="relative hidden lg:inline-grid h-24 w-24 cursor-pointer">
                <Image src="/logo.png" layout="fill" objectFit="contain"/>
                </div>

                <div className="relative w-20 h-20 lg:hidden flex-shrink-0 cursor-pointer">
                <Image src="/logo-app.png" layout="fill" objectFit="contain"/>
                </div>


            {/* right */}

                <div className="justify-end space-x-4 relative hidden lg:inline cursor-pointer">
                    <Link href="/"><a>Home</a></Link>
                    <Link href="/liked"><a>Liked</a></Link>

                </div>

                {/* <div className="flex items-center justify-end space-x-4 relative lg:hidden cursor-pointer">

                    <Link href='/'><HomeIcon className="navBtn" /></Link>
                    <Link href='/liked'><HeartIcon className="navBtn" /></Link>

                </div> */}


            </div>

        </div>

    );




}
export default Header;