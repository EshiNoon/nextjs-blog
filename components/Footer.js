import Link from 'next/link'
import Image from 'next/image'
import {
  HeartIcon,
  UserGroupIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'

function Footer() {
  return (
    <div className="sticky bottom-0 z-50 border-b bg-stone-300 shadow-sm">
      <div className="relative flex cursor-pointer items-center justify-between space-x-4 lg:hidden">
        <Link href="/">
          <HomeIcon className="navBtn" />
        </Link>
        <Link href="/liked">
          <HeartIcon className="navBtn" />
        </Link>
      </div>
    </div>
  )
}

export default Footer
