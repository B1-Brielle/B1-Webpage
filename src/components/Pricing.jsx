// import { CheckCircle2 } from "lucide-react";
// import { pricingOptions } from "../constants";
import { useState} from 'react';
import Monthly from "./Monthly";
import Yearly from "./Yearly";


const Pricing = () => {

    const [isYearly, setIsYearly] = useState(false)

  return (
    <section id='pricing' className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Pricing
      </h2>

      <div className='max-w-[1240px] mx-auto text-center flex pb-8  justify-center border-b border-gray-300 '>
                <ul className='flex text-2xl '>
                    <li onClick={() => {setIsYearly(false)}} className={`transition ease-in-out delay-150 p-8 hover:text-cyan-600 cursor-pointer ${!isYearly && 'border-b-4 border-cyan-600'}`} >
                        Monthly
                    </li>
                                
                    <li onClick={() => {setIsYearly(true)}} className={`transition ease-in-out delay-150 p-8 hover:text-cyan-600 cursor-pointer ${isYearly && 'border-b-4 border-cyan-600'}`}> 
                        Yearly
                    </li>
                 </ul>
            </div>
            {!isYearly ? <Monthly /> : <Yearly />}

    </section>
  );
};

export default Pricing;
