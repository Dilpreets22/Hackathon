
import { Figtree } from "next/font/google";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300"],
});

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
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
        <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded-4xl text-lg">Link Your Account
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M14.47 2.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H9a5.25 5.25 0 1 0 0 10.5h3a.75.75 0 0 1 0 1.5H9a6.75 6.75 0 0 1 0-13.5h10.19l-4.72-4.72a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
</svg>

        </button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
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
      
      
  );
}
