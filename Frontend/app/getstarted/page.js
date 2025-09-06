import Image from "next/image";
import Galaxy from "@/components/Galaxy";
import Link from "next/link";

const Page = () => {
  return ( 
  <div style={{ width: '100%', height: '605px', position: 'relative' }}>
  <Galaxy /> 
    <div className="-mt-80 relative">
      {/* Saturn Image */}
      <div className="absolute inset-0 flex justify-center items-center">
        <Image
          src="/satrun.png"
          alt="Saturn"
          width={700}
          height={700}
        />
      </div>

      {/* ---------- Mobile Layout (Stacked) ---------- */}
      <div className="relative z-10 flex flex-col gap-6 items-center px-4 md:hidden -mt-140">
        <Card
          title="Link Your Account"
          text="Link your bank account in Kairo to track your transactions and calculate financial pulse."
          icon="link"
        />
        <Card
          title="AI financial assistant"
          text="A friendly AI financial assistant. Helps you to make financial decisions."
          icon="ai"
        />
        <Card
          title="Financial Pulse"
          text="Financial Pulse is a score which you earn after tracking your transactions."
          icon="pulse"
          showProgress
        />
        <GetStarted />
      </div>

      {/* ---------- Desktop Layout (Around Saturn) ---------- */}
      <div className="hidden md:block relative w-full h-full">
        {/* Link Your Account - Left */}
        <div className="absolute top-1/3 left-122">
          <Card
            title="Link Your Account"
            text="Link your bank account in Kairo to track your transactions and calculate financial pulse."
            icon="link"
          />
        </div>

        {/* AI Assistant - Bottom Left */}
        <div className="absolute -mt-40 left-65">
          <Card
            title="AI financial assistant"
            text="A friendly AI financial assistant. Helps you to make financial decisions."
            icon="ai"
          />
        </div>

        {/* Financial Pulse - Right */}
        <div className="absolute -mt-40 right-60">
          <Card
            title="Financial Pulse"
            text="Financial Pulse is a score which you earn after tracking your transactions."
            icon="pulse"
            showProgress
          />
        </div>

        {/* Get Started Button - Bottom Center */}
        <div className="absolute -bottom-65 left-1/2 transform -translate-x-1/2">
          <GetStarted />
        </div>
      </div>
    </div>
</div>
 
  );
};

/* ---------- Card Component ---------- */
const Card = ({ title, text, showProgress = false, icon }) => {
  const renderIcon = () => {
    if (icon === "link") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 stroke-blue-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 
            4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 
            1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 
            4.5a4.5 4.5 0 0 0 1.242 7.244"
          />
        </svg>
      );
    }
    if (icon === "ai") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.8"
          className="w-6 h-6 stroke-blue-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.813 15.904 9 18.75l-.813-2.846a4.5 
              4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 
              4.5 0 0 0 3.09-3.09L9 5.25l.813 
              2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 
              12l-2.846.813a4.5 4.5 0 0 0-3.09 
              3.09Z"
          />
        </svg>
      );
    }
    if (icon === "pulse") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 stroke-blue-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 
              5.25h6m-6 2.25h3m-3.75 3h15a2.25 
              2.25 0 0 0 2.25-2.25V6.75A2.25 
              2.25 0 0 0 19.5 4.5h-15a2.25 
              2.25 0 0 0-2.25 2.25v10.5A2.25 
              2.25 0 0 0 4.5 19.5Z"
          />
        </svg>
      );
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 w-72 z-10">
      <div className="flex items-center space-x-3 mb-2">
        {renderIcon()}
        <h3 className="text-lg font-semibold text-black">{title}</h3>
      </div>
      <p className="text-sm text-gray-600 mt-1">{text}</p>

      {showProgress && (
        <div className="mt-3">
          <div className="flex justify-between text-xs text-gray-800 mb-1">
            <span>Score</span>
            <span>50/100</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-green-500 h-2 rounded-full"
              style={{ width: "50%" }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

/* ---------- Button Component ---------- */
const GetStarted = () => (
  <Link href='/link2'>
  <button
    type="submit"
    className="relative flex justify-center gap-2 items-center shadow-xl text-lg 
      bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 
      before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:rounded-full 
      before:bg-emerald-500 before:transition-all before:duration-700 before:-z-10
      hover:before:w-full hover:text-white text-gray-800 
      px-6 py-3 overflow-hidden border-2 rounded-full group z-10 mt-4"
  >
    Get Started
    <svg
      className="w-8 h-8 z-10 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
      viewBox="0 0 16 19"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 
          7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 
          0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 
          2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 
          8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 
          15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"></path>
    </svg>
  </button>
  </Link>  
);

export default Page;
