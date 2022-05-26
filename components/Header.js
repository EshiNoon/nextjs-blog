import Link from 'next/link'
import Image from 'next/image'
import {
  HeartIcon,
  UserGroupIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'

function Header() {
  return (
    <div className="sticky top-0 border-b bg-stone-300 shadow-sm">
      <div className="mx-5 flex max-w-6xl justify-between lg:mx-auto">
        {/* left */}
        <div className="relative top-0 hidden h-24 w-24 lg:inline-grid">
          <Image src="/logo.png" layout="fill" objectFit="contain" />
        </div>

        <div className="relative h-20 w-20 flex-shrink-0 lg:hidden">
          <Image src="/logo-app.png" layout="fill" objectFit="contain" />
        </div>

        {/* right */}

        <div className="relative top-8 hidden cursor-pointer justify-end space-x-4 text-lg lg:inline">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/liked">
            <a>Liked</a>
          </Link>
        </div>

      </div>
    </div>
  )
}
export default Header
