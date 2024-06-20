import React from 'react'
import CategoryCard from './CategoryCard'
import { PiPenNib } from "react-icons/pi";
import { PiFileHtmlThin } from "react-icons/pi";
import { PiMicrophoneStageThin } from "react-icons/pi";
import { PiBriefcaseLight } from "react-icons/pi";
import { PiSunHorizonThin } from "react-icons/pi";
import { SlCamera } from "react-icons/sl";
import { PiMusicNoteLight } from "react-icons/pi";
import { GoDatabase } from "react-icons/go";
import { PiLightbulbThin } from "react-icons/pi";
import { PiHeartbeatThin } from "react-icons/pi";
import { BiNetworkChart } from "react-icons/bi";
import { PiDetectiveThin } from "react-icons/pi";

const Categories = () => {
  return (
    <div className='w-full bg-[#F0FBF7] py-24'>
          <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0'>
             <h1 className='md:leading-[72px] text-3xl font-bold'>Most <span className='text-[#20B486]'>Popular Categories</span></h1>
             <p className='text-lg text-gray-600'>Various versions have evolved over the years, sometimes by accident.</p>

             <div className="grid lg:grid-cols-4 grid-cols-2 py-12 gap-4">
                 <CategoryCard 
                  icons={<PiPenNib size={30} />}
                  title={'Design'}
                 />
                 <CategoryCard 
                  icons={<PiFileHtmlThin size={30} />}
                  title={'Development'}
                 />
                 <CategoryCard 
                  icons={<PiMicrophoneStageThin size={30} />}
                  title={'Marketing'}
                 />
                  <CategoryCard 
                  icons={<PiBriefcaseLight size={30} />}
                  title={'Business'}
                 />

                 <CategoryCard 
                  icons={<PiSunHorizonThin size={30} />}
                  title={'Lifestyle'}
                 />
                 <CategoryCard 
                  icons={<SlCamera size={30} />}
                  title={'Photography'}
                 />
                 <CategoryCard 
                  icons={<PiMusicNoteLight size={30} />}
                  title={'Music'}
                 />
                  <CategoryCard 
                  icons={<GoDatabase size={30} />}
                  title={'Data Science'}
                 />

                 <CategoryCard 
                  icons={<PiLightbulbThin size={30} />}
                  title={'Personal Development'}
                 />
                 <CategoryCard 
                  icons={<PiHeartbeatThin size={30} />}
                  title={'Health & Fitness'}
                 />
                 <CategoryCard 
                  icons={<BiNetworkChart size={30} />}
                  title={'Finance'}
                 />
                  <CategoryCard 
                  icons={<PiDetectiveThin size={30} />}
                  title={'Teaching'}
                 />
                 



             </div>
          </div>
    </div>
  )
}

export default Categories