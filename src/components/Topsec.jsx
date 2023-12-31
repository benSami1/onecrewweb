import { Link } from "react-scroll";
import { TypeAnimation } from 'react-type-animation';
import { useEffect, useState } from "react";
// import ReactTyped from "react-typed";
import Header from '../components/Header'

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
     
      <div className="overflow-hidden  pt-8 pb-6 sm:pt-8  webback">
        <Header/>
        
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden  sm:-top-80"
          aria-hidden="true"
        >
         
        </div>
        <div className="mx-auto max-w-2xl pt-40 pb-40 px-10 sm:py-48 lg:pt-20 sm:ml-16">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          
          </div>
          <div className="text-center sm:text-left  ">
             <h1
          className={`text-xl tracking-tight text-white sm:text-3xl ${
            showHello ? "fadeIn" : "fadeOut"
          }`}
        >
          {showHello ? "Hello" : "السلام عليكم"}
        </h1>
           <h1 className="text-3xl font-bold tracking-tight text-white sm:text-7xl Inter mobile-margin">

             {" "}
        <div >
      <TypeAnimation
        sequence={[
          "We Believe",
          1000,
          "We Code",
          1000,
          "We Innovate",
          1000,
        ]}
        speed={70}
        repeat={Infinity}
       style={{
          fontSize: '3rem', // Default font size
         
        }}
        
      />
    </div>
            </h1>
           
<p className="mt-6 text-lg leading-8 text-gray-200 sm:mt-8 full-text">
  At OneCrew Technologies, we are not just a team we are a tech-driven synergy. With a shared passion for innovation, we craft digital solutions that redefine possibilities. Welcome to a world where code meets creativity, and where your ideas find their digital home.
</p>


<p className="mt-6 text-lg leading-8 text-gray-200 sm:mt-8 mobile-text">
  Where Innovation Meets Execution - OneCrew Technologies: Building Tomorrow, Today!
</p>

            <div className="mt-10 flex items-center justify-center gap-x-6">
             
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