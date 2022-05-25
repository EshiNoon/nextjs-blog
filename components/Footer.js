import Link from "next/link";
import Image from "next/image";
import {
    HeartIcon,
    UserGroupIcon,
    PaperAirplaneIcon,
    MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

function Footer() {
    return (

        <div className="shadow-sm border-b bg-stone-400 sticky bottom-0 z-50">
            <div className="flex items-center justify-between space-x-4 relative lg:hidden cursor-pointer">

                <Link href='/'><HomeIcon className="navBtn" /></Link>
                <Link href='/liked'><HeartIcon className="navBtn" /></Link>

            </div>

        </div>


);

}

export default Footer;
