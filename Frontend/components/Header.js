import { Figtree } from "next/font/google";
import Link from "next/link";
const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300"],
});
const Header = () => {
  return (
<div className="relative w-full h-screen overflow-hidden bg-black">
          {/* Background video(heroicons) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
<div className="relative z-10 flex items-center justify-center w-full h-full bg-black/50">
  <section className="text-gray-400 body-font">
  <div className="container mx-auto flex px-7 py-20 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className={`${figtree.className} title-font sm:text-5xl text-3xl mb-4 font-medium text-gray-200 tracking-wide`}>The only financial
        <br className="hidden lg:inline-block" />wellness app helping
        <br className="hidden lg:inline-block" />you understand your 
        <br className="hidden lg:inline-block" />money.
      </h1>
      <p className="mb-8 leading-relaxed text-sm">Kairo is an financial wellness app that securely connects to your bank accounts. It uses a powerful AI brain to organize your spending, provide a clear "Financial Pulse" score and act as a conversational co-pilot you can talk to helping you understand your money and seize the perfect moment for your financial decisions.
</p>
      <div className="flex justify-center">
        <Link href="/getstarted">
 <button
  type="submit"
  className="relative flex justify-center gap-2 items-center mx-auto shadow-xl text-sm bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 
  before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:rounded-full before:bg-emerald-500 before:transition-all before:duration-700 before:-z-10
  hover:before:w-full hover:text-white text-gray-800 
  px-6 py-3 overflow-hidden border-2 rounded-full group z-10">

  Get Started 
  <svg
    className="w-8 h-8 z-10 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
    viewBox="0 0 16 19"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
    ></path>
  </svg>
</button>
        </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 bg-black">
        <video
        autoPlay
        muted
        playsInline
        width="720"
        height="600"
        className="rounded-lg shadow-lg"
      >
        <source src="/component.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</section>
    </div>
      </div>     

  )
}

export default Header
