
"use client"
import { Figtree } from "next/font/google";
const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Page() {
  return (
    <div className="mx-auto bg-black">
      <div className="container px-5 py-18 mx-auto">  
      <h1 className={`${figtree.className}title-font sm:text-5xl text-3xl -ml-4 -mt-8 mb-8 font-medium text-gray-200 text-center justify-items-center justify-center`}>How it works</h1>
      <div className="flex flex-wrap -m-4">
        <div className="p-13 lg:w-1/3">
        <div className="group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1">
      <div className="text-white rounded-3xl border border-green-300/20 bg-gradient-to-tr from-[#0F0F0F] to-[#0B0B0B] shadow-2xl duration-700 z-10 relative backdrop-blur-xl hover:border-green-300/40 overflow-hidden hover:shadow-pink-300/10 hover:shadow-3xl w-[250px]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-green-300/5 to-green-300/10 opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
          <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-gradient-to-tr from-green-300/10 to-transparent blur-3xl opacity-30 group-hover:opacity-50 transform group-hover:scale-110 transition-all duration-700 animate-bounce delay-500" />
          <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-green-300/5 blur-xl animate-ping" />
          <div className="absolute bottom-16 right-16 w-12 h-12 rounded-full bg-green-300/5 blur-lg animate-ping delay-1000" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-300/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000" />
        </div>
        <div className="p-8 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-6">
              <div className="transform group-hover:rotate-180 transition-transform duration-700">
              </div>
            </div>
            <div className="mb-4 transform group-hover:scale-105 transition-transform duration-300">
              <p className="text-3xl font-bold bg-gradient-to-r from-green-200 via-green-300 to-green-400 bg-clip-text text-transparent animate-pulse">
                Sign Up First
              </p>
            </div>
            <div className="space-y-1 max-w-sm">
              <p className="text-gray-300 text-sm leading-relaxed transform group-hover:text-gray-200 transition-colors duration-300">
                With a user-friendly registration process, you’ll 
gain access to a host features.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed transform group-hover:text-gray-200 transition-colors duration-300">
              </p>
              <p className="text-gray-300 text-sm leading-relaxed transform group-hover:text-gray-200 transition-colors duration-300">
              </p>
            </div>
            <div className="mt-6 w-1/3 h-0.5 bg-gradient-to-r from-transparent via-green-300 to-transparent rounded-full transform group-hover:w-1/2 group-hover:h-1 transition-all duration-500 animate-pulse" />
            <div className="flex space-x-2 mt-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-2 h-2 bg-green-300 rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-green-300 rounded-full animate-bounce delay-100" />
              <div className="w-2 h-2 bg-green-300 rounded-full animate-bounce delay-200" />
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-green-300/10 to-transparent rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-green-300/10 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>        
      </div>
      {/*card 2 */}
      <div className="p-13 lg:w-1/3 ">
        <div className="group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1">
      <div className="text-white rounded-3xl border border-blue-200/20 bg-gradient-to-tr from-[#0F0F0F] to-[#0B0B0B] shadow-2xl duration-700 z-10 relative backdrop-blur-xl hover:border-blue-300/40 overflow-hidden hover:shadow-blue-200/10 hover:shadow-3xl w-[250px]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-pink-300/5 to-blue-200/10 opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
          <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-gradient-to-tr from-blue-300/10 to-transparent blur-3xl opacity-30 group-hover:opacity-50 transform group-hover:scale-110 transition-all duration-700 animate-bounce delay-500" />
          <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-blue-200/5 blur-xl animate-ping" />
          <div className="absolute bottom-16 right-16 w-12 h-12 rounded-full bg-blue-300/5 blur-lg animate-ping delay-1000" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000" />
        </div>
        <div className="p-8 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-6">
              <div className="transform group-hover:rotate-180 transition-transform duration-700">
              </div>
            </div>
            <div className="mb-4 transform group-hover:scale-105 transition-transform duration-300">
              <p className="text-3xl font-bold bg-gradient-to-r from-pink-200 via-blue-300 to-white bg-clip-text text-transparent animate-pulse">
                Link Your Account
              </p>
            </div>
            <div className="space-y-1 max-w-sm">
              <p className="text-gray-300 text-sm leading-relaxed transform group-hover:text-gray-200 transition-colors duration-300">
                Link your bank account in kairo to track your transactions and calculate financial pulse.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed transform group-hover:text-gray-200 transition-colors duration-300">
              </p>
              <p className="text-gray-300 text-sm leading-relaxed transform group-hover:text-gray-200 transition-colors duration-300">
              </p>
            </div>
            <div className="mt-6 w-1/3 h-0.5 bg-gradient-to-r from-transparent via-blue-200 to-transparent rounded-full transform group-hover:w-1/2 group-hover:h-1 transition-all duration-500 animate-pulse" />
            <div className="flex space-x-2 mt-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-2 h-2 bg-blue-300 rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-blue-200 rounded-full animate-bounce delay-100" />
              <div className="w-2 h-2 bg-blue-300 rounded-full animate-bounce delay-200" />
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-200/10 to-transparent rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-blue-300/10 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
        </div>
        {/*card 3 */}
      <div className="p-13 lg:w-1/3 ">
        <div className="group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1">
      <div className="text-white rounded-3xl border border-violet-200/20 bg-gradient-to-tr from-[#0F0F0F] to-[#0B0B0B] shadow-2xl duration-700 z-10 relative backdrop-blur-xl hover:border-violet-300/40 overflow-hidden hover:shadow-violet-200/10 hover:shadow-3xl w-[250px]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-violet-300/5 to-violet-200/10 opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
          <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-gradient-to-tr from-violet-300/10 to-transparent blur-3xl opacity-30 group-hover:opacity-50 transform group-hover:scale-110 transition-all duration-700 animate-bounce delay-500" />
          <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-violet-200/5 blur-xl animate-ping" />
          <div className="absolute bottom-16 right-16 w-12 h-12 rounded-full bg-violet-300/5 blur-lg animate-ping delay-1000" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-200/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000" />
        </div>
        <div className="p-8 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-6">
              <div className="transform group-hover:rotate-180 transition-transform duration-700">
              </div>
            </div>
            <div className="mb-4 transform group-hover:scale-105 transition-transform duration-300">
              <p className="text-3xl -mt-3  font-bold bg-gradient-to-r from-violet-200 via-violet-300 to-violet-400 bg-clip-text text-transparent animate-pulse">
                Track Financial Pulse 
              </p>
            </div>
            <div className="space-y-1 max-w-sm">
              <p className="text-gray-300 text-sm leading-relaxed transform group-hover:text-gray-200 transition-colors duration-300">
                After link your account in kairo can track your financial pulse.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed transform group-hover:text-gray-200 transition-colors duration-300">
              </p>
              <p className="text-gray-300 text-sm leading-relaxed transform group-hover:text-gray-200 transition-colors duration-300">
              </p>
            </div>
            <div className="mt-6 w-1/3 h-0.5 bg-gradient-to-r from-transparent via-violet-200 to-transparent rounded-full transform group-hover:w-1/2 group-hover:h-1 transition-all duration-500 animate-pulse" />
            <div className="flex space-x-2 mt-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-2 h-2 bg-violet-300 rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-violet-200 rounded-full animate-bounce delay-100" />
              <div className="w-2 h-2 bg-violet-300 rounded-full animate-bounce delay-200" />
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-violet-200/10 to-transparent rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-violet-300/10 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
        </div>
    </div>
</div>
    </div>   
  )
}