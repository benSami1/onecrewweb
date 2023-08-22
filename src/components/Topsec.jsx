import { Link } from "react-scroll";
import { TypeAnimation } from 'react-type-animation';
import { useEffect, useState } from "react";
// import ReactTyped from "react-typed";

export default function Topsec() {
   const [showHello, setShowHello] = useState(true);

  // Function to toggle between "Hello" and "Salam" after a delay
  useEffect(() => {
    const interval = setInterval(() => {
      setShowHello((prev) => !prev);
    }, 4000); // 3000 milliseconds = 3 seconds (adjust the delay as needed)

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);


  return (
    <div  id="home">
     
      <div className="overflow-hidden  py-24 sm:py-32">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden  sm:-top-80"
          aria-hidden="true"
        >
         
        </div>
        <div className="mx-auto max-w-2xl  sm:py-48 lg:pt-2 sm:ml-16">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          
          </div>
          <div className="text-center sm:text-left ">
             <h1
          className={`text-sm tracking-tight text-gray-900 sm:text-3xl ${
            showHello ? "fadeIn" : "fadeOut"
          }`}
        >
          {showHello ? "Hello" : "السلام عليكم"}
        </h1>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-7xl Inter">
             {" "}
        <div>
      <TypeAnimation
        sequence={[
          "We Code",
          1000,
          "We Innovate",
          1000,
          "We are OneCrew",
          1000,
        ]}
        speed={70}
        repeat={Infinity}
        style={{ fontSize: '5rem' }}
      />
    </div>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
             I enjoy working with data and using it to gain valuable insights.
Whether its organizing databases, analyzing information, or creating
visualizations, I strive to simplify complex concepts and make them
accessible for everyone. My goal is to leverage data effectively to help
businesses make informed decisions and improve their processes.

            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="features"
                smooth={true}
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started ↓
              </Link>
              <div className="arrow bounce">
<div className="wrapper">
        
   <Link
                to="features"
                smooth={true}
              >
		<div className="arrow">
			<ul>
				<li></li>
				<li></li>
			</ul>
		</div>
	</Link>
</div>

</div>
             
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
         
        </div>
      </div>
    </div>
  )
}