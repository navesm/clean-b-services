
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-black/80 via-gray-700/80 to-teal-800/80 backdrop-blur">
      <nav className="flex justify-between items-center h-20 px-8">

        <Link href="/" className="flex items-center">
          <Image
            src="/cleanbcleaningservicellc/CBCS-logo.jpg"
            height={70}
            width={70}
            alt="Clean B Cleaning Service LLC Logo"
            className="rounded"
          />
        </Link>
        <ul className="flex flex-row gap-6 text-lg font-semibold">
          <li>
            <Link
              href="/"
            >
              <span className="hover:text-teal-300 transition-colors duration-200">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <span className="hover:text-teal-300 transition-colors duration-200">Services</span>
            </Link>
          </li>
          <li>
            <Link href="/gallery">
              <span className="hover:text-teal-300 transition-colors duration-200">Gallery</span>
            </Link></li>
          <li>
            <Link href="/reviews">
              <span className="hover:text-teal-300 transition-colors duration-200">Reviews</span>
            </Link></li>
          <li>
            <Link href="/booking">
              <span className="hover:text-teal-300 transition-colors duration-200">Book With Me</span>
            </Link>
          </li>
          <span></span>
        </ul>
      </nav>
    </header>
  )
}