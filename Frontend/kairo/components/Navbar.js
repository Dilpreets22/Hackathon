import Link from "next/link"
import Image from "next/image"
const Navbar = () => {
  return (
    <div>
      <header className="text-gray-300 body-font bg-white/30 backdrop-blur-[3px] rounded-2xl mt-2 mr-4 ml-4">
  <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
    <Image
      src="/Logo.png"
      width={150}
      height={150}
      alt="Logo"
    />
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
     
      <Link className="mr-5 hover:text-gray-300" href='/about'>About</Link>
      <Link className="mr-5 hover:text-gray-300" href='/feature'>Features</Link>
      <Link className="mr-5 hover:text-gray-300" href='/contact'>Contact Us</Link>
    </nav>
    <button className="inline-flex items-center text-white bg-green-500 border-0 py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-base mt-4 md:mt-0">Sign in
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
    </div>
  )
}

export default Navbar
