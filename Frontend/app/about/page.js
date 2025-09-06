'use client';
import CardSwap ,{Card}from "@/components/CardSwap"
import Image from "next/image";
import { Figtree } from "next/font/google";
const page = () => {
  return (
   <div className="relative w-full h-screen overflow-hidden ">
    <div style={{ height: '450px', position: 'relative' }}>
  <CardSwap
    cardDistance={60}
    verticalDistance={70}
    delay={5000}
    pauseOnHover={false}
  >
    <Card>
      <h3 className="font-bold ml-4 mt-5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
</svg>

        Financial Pulse</h3>
      <p className="ml-6 mt-4 rounded-2xl">
           <Image
                      src="/financial.png"
                      width={400}
                      height={400}
                      alt="Logo"
                    />
      </p>
    </Card>
    <Card>
      <h3 className="font-bold ml-4 mt-5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
</svg> Ai Chatbot</h3>
      <p className="ml-6 mt-4 rounded-2xl">
         <Image
                      src="/chatbot.png"
                      width={350}
                      height={350}
                      alt="Logo"
                    />
      </p>
    </Card>
    <Card>
      <h3>Kairo</h3>
      <p>Your content here</p>
    </Card>
  </CardSwap>
        <div className="container mx-auto flex px-7 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className='title-font sm:text-4xl text-3xl items-center justify-center text-center -mt-8 mb-8 font-bold text-gray-300'>About Us
                </h1>
                <div className=" lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
 <h2 className="mb-6 leading-relaxed text-white font-bold text-xl flex justify-center items-center text-center">Vision 🎯</h2>
                <span className="mb-6 leading-relaxed ">To create a world where financial decisions feel effortless, empowering every individual to take control of their money,
                   reduce stress, and build lasting financial wellness.</span>
                <br />
                <h2 className="mb-8 leading-normal text-white font-bold text-xl flex justify-center items-center text-center">Mission 🚀</h2>
                <span className="mb-8 leading-normal">Kairo’s mission is to help users make the right financial decision at the right time by:
                    Simplifying money management with a clear Financial Pulse score that reflects overall financial health.
                    Empowering smarter choices through AI-driven insights, proactive savings suggestions, and personalized guidance.
                    Building confidence by acting as a conversational financial co-pilot that users can trust and talk to naturally.
                    Ensuring accessibility with a free, intuitive, and engaging platform that works seamlessly for everyone.
                </span>
                </div>
               
    </div>
  </div>
</div>

   </div>

  )
}

export default page
