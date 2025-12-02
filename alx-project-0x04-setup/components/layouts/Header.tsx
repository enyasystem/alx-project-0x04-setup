import Link from "next/link";
import Button from "../common/Button";
import { useRouter } from 'next/router'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header: React.FC = () => {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
        <Link href="/" className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
          Splash App
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {navItems.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-sm text-gray-700 hover:text-gray-900">{n.label}</Link>
              </li>
            ))}
          </ul>

          <div className="flex gap-3">
            <Button
              buttonLabel="Sign In"
              buttonBackgroundColor="red"
              action={() => router.push('/signin')}
            />
            <Button
              buttonLabel="Sign Up"
              buttonBackgroundColor="blue"
              action={() => router.push('/signup')}
            />
          </div>
        </nav>

        {/* Mobile toggler */}
        <div className="md:hidden flex items-center">
          <button
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
            className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            {open ? <FaTimes size={18} /> : <FaBars size={18} />}
            <span className="sr-only">Toggle navigation</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" className={`${open ? 'block' : 'hidden'} md:hidden bg-white border-t` }>
        <div className="container mx-auto px-4 py-4 space-y-3">
          <ul className="flex flex-col gap-2">
            {navItems.map((n) => (
              <li key={n.href}>
                <Link href={n.href} onClick={() => setOpen(false)} className="block text-gray-700 py-2 px-3 rounded hover:bg-gray-50">{n.label}</Link>
              </li>
            ))}
          </ul>

          <div className="pt-3 border-t flex flex-col gap-3">
            <Button buttonLabel="Sign In" buttonBackgroundColor="red" action={() => { setOpen(false); router.push('/signin') }} />
            <Button buttonLabel="Sign Up" buttonBackgroundColor="blue" action={() => { setOpen(false); router.push('/signup') }} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
