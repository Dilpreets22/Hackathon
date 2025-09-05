import ChatBot from "@/components/Chatbot";
import Galaxy from "@/components/Galaxy";
import FinancialPulse from "@/components/pulse";
import Image from "next/image";
const page = () => {
  return ( 
     <section className="text-gray-400 body-font relative">
    <div style={{ width: '100%', height: '600px', position: 'relative' }}> 
      <Galaxy /> 
  <div className="relative -mt-130 mx-auto flex px-7 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-200">Clarity in a Single Number
      </h1>
      <span className="mb-8 leading-relaxed">Kairo simplifies your complex finances into one easy-to-understand "Financial Pulse" score, so you can stop guessing and start making confident decisions. We analyze the key areas of your financial life to give you a clear, real-time measure of your financial health.
</span>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 -mt-120"> 
  
    <Image
              src="/satrun2.png"
              alt="Saturn"
              width={800}
              height={800}
            />  
 <div className="relative -mb-90 -mt-60 mx-auto px-7 md:flex-row flex-col items-center overflow-hidden"> 
  <FinancialPulse/> 
</div>
    </div>
  </div>
    </div>
    <ChatBot/>
    </section>
  )
}

export default page
