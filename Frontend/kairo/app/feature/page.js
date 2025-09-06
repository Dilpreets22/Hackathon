'use client';
import Particles from "@/components/particals";
const featuresData = [
  {
    title: "Secure Transactions",
    description: "Your money is safe with our encrypted and secure transaction system.",
  },
  {
    title: "Real-time Updates",
    description: "Get instant updates on your transactions and account activity.",
  },
  {
    title: "User-Friendly Interface",
    description: "Intuitive and easy-to-use dashboard for all users.",
  },
  {
    title: "Multi-Platform Access",
    description: "Access your account anytime, anywhere from any device.",
  },
];

const Features = () => {
  return (
    <div className=" min-h-screen  bg-black text-gray-200">
    <div style={{ width: '100%', height: '605px', position: 'relative' }}>
  <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
</div>
      {/* Hero Section */}
      <section className=" relative -mt-155 text-center py-20 px-7">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Features</h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Explore the powerful features of our platform designed to simplify your financial journey.
        </p>
      </section>

      {/* Features Cards */}
      <section className="container mx-auto px-7 -mt-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuresData.map((feature, index) => (
          <div key={index} className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 text-center hover:scale-105 transform transition duration-300">
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </section>

      {/* Benefits / CTA */}
      <section className=" bg-green-400/10 backdrop-blur-lg border border-white/20 text-white py-16 text-center rounded-xl mx-4 my-8">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="mb-6">Sign up now and enjoy secure, seamless, and fast financial management.</p>
        <a
          href="/link2"
          className="inline-block bg-white text-green-500 px-6 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition"
        >
          Sign Up
        </a>
      </section>
    </div>
  );
};

export default Features;
