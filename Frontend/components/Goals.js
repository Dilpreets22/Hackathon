'use client';
import styled from 'styled-components';
import Image from 'next/image';
import { Figtree } from "next/font/google";
const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400"],
});
const Card = () => {
return (
    <section className="text-gray-400 body-font bg-black">
        <div className="container mx-auto flex px-7 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className={`${figtree.className}title-font sm:text-4xl text-3xl items-center justify-center text-center -mt-8 mb-8 font-bold text-gray-300`}>Vision & Mission
                </h1>
                <h2 className="mb-6 leading-relaxed text-white font-bold text-xl flex justify-center items-center text-center">Vision 🎯</h2>
                <p className="mb-6 leading-relaxed">To create a world where financial decisions feel effortless, empowering every individual to take control of their money, reduce stress, and build lasting financial wellness.</p>
                <br />
                <h2 className="mb-8 leading-relaxed text-white font-bold text-xl flex justify-center items-center text-center">Mission 🚀</h2>
                <span className="mb-8 leading-relaxed">Kairo’s mission is to help users make the right financial decision at the right time by:
                    Simplifying money management with a clear Financial Pulse score that reflects overall financial health.
                    Empowering smarter choices through AI-driven insights, proactive savings suggestions, and personalized guidance.
                    Building confidence by acting as a conversational financial co-pilot that users can trust and talk to naturally.
                    Ensuring accessibility with a free, intuitive, and engaging platform that works seamlessly for everyone.
                </span>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                {/*<StyledWrapper>
                    <div className="coin">
                        <div className="side heads">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="100%" height="100%" version="1.1" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 4091.27 4091.73" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <g id="Layer_x0020_1">
                                    <metadata id="CorelCorpID_0Corel-Layer" />
                                    <g id="_1421344023328">
                                        <path fill="#EEAECA" d="M4030.06 2540.77c-273.24,1096.01 -1383.32,1763.02 -2479.46,1489.71 -1095.68,-273.24 -1762.69,-1383.39 -1489.33,-2479.31 273.12,-1096.13 1383.2,-1763.19 2479,-1489.95 1096.06,273.24 1763.03,1383.51 1489.76,2479.57l0.02 -0.02z" />
                <path fill="#EEAECA" d="M4030.06 2540.77c-273.24,1096.01 -1383.32,1763.02 -2479.46,1489.71 -1095.68,-273.24 -1762.69,-1383.39 -1489.33,-2479.31 273.12,-1096.13 1383.2,-1763.19 2479,-1489.95 1096.06,273.24 1763.03,1383.51 1489.76,2479.57l0.02 -0.02z" />
                <path fill="white" fillRule="nonzero" d="M2947.77 1754.38c40.72,-272.26 -166.56,-418.61 -450,-516.24l91.95 -368.8 -224.5 -55.94 -89.51 359.09c-59.02,-14.72 -119.63,-28.59 -179.87,-42.34l90.16 -361.46 -224.36 -55.94 -92 368.68c-48.84,-11.12 -96.81,-22.11 -143.35,-33.69l0.26 -1.16 -309.59 -77.31 -59.72 239.78c0,0 166.56,38.18 163.05,40.53 90.91,22.69 107.35,82.87 104.62,130.57l-104.74 420.15c6.26,1.59 14.38,3.89 23.34,7.49 -7.49,-1.86 -15.46,-3.89 -23.73,-5.87l-146.81 588.57c-11.11,27.62 -39.31,69.07 -102.87,53.33 2.25,3.26 -163.17,-40.72 -163.17,-40.72l-111.46 256.98 292.15 72.83c54.35,13.63 107.61,27.89 160.06,41.3l-92.9 373.03 224.24 55.94 92 -369.07c61.26,16.63 120.71,31.97 178.91,46.43l-91.69 367.33 224.51 55.94 92.89 -372.33c382.82,72.45 670.67,43.24 791.83,-303.02 97.63,-278.78 -4.86,-439.58 -206.26,-544.44 146.69,-33.83 257.18,-130.31 286.64,-329.61l-0.07 -0.05zm-512.93 719.26c-69.38,278.78 -538.76,128.08 -690.94,90.29l123.28 -494.2c152.17,37.99 640.17,113.17 567.67,403.91zm69.43 -723.3c-63.29,253.58 -453.96,124.75 -580.69,93.16l111.77 -448.21c126.73,31.59 534.85,90.55 468.94,355.05l-0.02 0z" />
              </g>
            </g>
          </svg>
        </div>
        <div className="side tails">
          <svg xmlns="http://www.w3.org/2000/svg" className="svg_back" xmlSpace="preserve" width="100%" height="100%" version="1.1" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 4091.27 4091.73" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g id="Layer_x0020_1">
              <metadata id="CorelCorpID_0Corel-Layer" />
              <g id="_1421344023328">
                <path fill="#EEAECA" fillRule="nonzero" d="M4030.06 2540.77c-273.24,1096.01 -1383.32,1763.02 -2479.46,1489.71 -1095.68,-273.24 -1762.69,-1383.39 -1489.33,-2479.31 273.12,-1096.13 1383.2,-1763.19 2479,-1489.95 1096.06,273.24 1763.03,1383.51 1489.76,2479.57l0.02 -0.02z" />
                <path fill="white" fillRule="nonzero" d="M2947.77 1754.38c40.72,-272.26 -166.56,-418.61 -450,-516.24l91.95 -368.8 -224.5 -55.94 -89.51 359.09c-59.02,-14.72 -119.63,-28.59 -179.87,-42.34l90.16 -361.46 -224.36 -55.94 -92 368.68c-48.84,-11.12 -96.81,-22.11 -143.35,-33.69l0.26 -1.16 -309.59 -77.31 -59.72 239.78c0,0 166.56,38.18 163.05,40.53 90.91,22.69 107.35,82.87 104.62,130.57l-104.74 420.15c6.26,1.59 14.38,3.89 23.34,7.49 -7.49,-1.86 -15.46,-3.89 -23.73,-5.87l-146.81 588.57c-11.11,27.62 -39.31,69.07 -102.87,53.33 2.25,3.26 -163.17,-40.72 -163.17,-40.72l-111.46 256.98 292.15 72.83c54.35,13.63 107.61,27.89 160.06,41.3l-92.9 373.03 224.24 55.94 92 -369.07c61.26,16.63 120.71,31.97 178.91,46.43l-91.69 367.33 224.51 55.94 92.89 -372.33c382.82,72.45 670.67,43.24 791.83,-303.02 97.63,-278.78 -4.86,-439.58 -206.26,-544.44 146.69,-33.83 257.18,-130.31 286.64,-329.61l-0.07 -0.05zm-512.93 719.26c-69.38,278.78 -538.76,128.08 -690.94,90.29l123.28 -494.2c152.17,37.99 640.17,113.17 567.67,403.91zm69.43 -723.3c-63.29,253.58 -453.96,124.75 -580.69,93.16l111.77 -448.21c126.73,31.59 534.85,90.55 468.94,355.05l-0.02 0z" />
              </g>
            </g>
          </svg></div>
      </div>
    </StyledWrapper>
                 */}
                  <Image
                               src="/coin.png"
                               width={400}
                               height={400}
                               alt="Logo"
                             />
    </div>
  </div>
</section>
  );
}

const StyledWrapper = styled.div`
  .coin {
    font-size: 200px;
    width: 0.1em;
    height: 1em;
    background: radial-gradient(circle,rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%);
    margin: auto;
    position: relative;
    top: 0;
    left: 0;
    margin-left: 50%;
    right: 0;
    bottom: 0;
    animation: rotate_4001510 7s infinite linear;
    transform-style: preserve-3d;
  }

  .coin .side, .coin:before, .coin:after {
    content: "";
    position: absolute;
    width: 1em;
    height: 1em;
    overflow: hidden;
    border-radius: 50%;
    right: -0.4em;
    text-align: center;
    line-height: 1;
    transform: rotateY(-90deg);
    -moz-backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .coin .tails, .coin:after {
    left: -0.4em;
    transform: rotateY(90deg);
  }

  .coin:before, .coin:after {
    background: radial-gradient(circle,rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%);
    backface-visibility: hidden;
    transform: rotateY(90deg);
  }

  .coin:after {
    transform: rotateY(-90deg);
  }

  @keyframes rotate_4001510 {
    100% {
      transform: rotateY(360deg);
    }
  }

  .svg_back {
    transform: scaleX(-1);
  }`;

export default Card;
