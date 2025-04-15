import ProfileIcon from '@/components/icons/profile-icon'
import {Button} from '@/components/molecules/shadcn/button'
import {NavigationMenuDemo} from '@/components/organisms/shadcn/navigation-menu'
import {Github} from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md flex items-center justify-between px-4 py-3 md:px-6 lg:px-8 ">
      <Link className="flex items-center" href="#">
        <ProfileIcon className="h-6 w-6" />
        <span className="ml-2 text-lg font-semibold">Porfolio</span>
      </Link>
      <nav className="hidden space-x-4 md:flex">
        <NavigationMenuDemo></NavigationMenuDemo>
      </nav>
      <Link target="_blank" href="https://github.com/mnapo">
        <Button variant="default">
          <Github />
          <p className="pl-1">Perfil de GitHub</p>
        </Button>
      </Link>
    </header>
  )
}