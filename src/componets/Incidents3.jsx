import React from 'react'
import { Incidents3Data } from '../lib'
import { IncidentsCommon2 } from './common/IncidentsCommon2'
import { useNavigate } from 'react-router-dom';
function Incidents3() {
    const Navigate = useNavigate();
    const handleClick = () => {
        Navigate('/Incidents4');
    }

    return (
        <section className='max-w-[1300px] mx-auto pt-6'>
            <div className='pb-15 md:flex justify-between items-center max-md:text-center pt-8'>
                <div className='pb-4'>
                    <p className='text-[12px]'>Home - Incidents - New Incident</p>
                    <h2 className='text-[26px] font-bold text-black'>New Incident</h2>
                </div>
                <div>
                    <div action="#" className='space-x-4 max-sm:space-y-4'>
                        <input className='w-[140px] text-center border-1 border-gray-300 bg-white py-2 px-6 rounded-sm text-black' type="submit" value='Back' />
                        <button onClick={handleClick} className='bg-orange py-2 px-6 rounded-sm text-white' > <img src={'./pluse.png'} alt="" className='inline-block pr-2' /> Next Step </button>
                    </div>
                </div>
            </div>
            <div className='max-w-[760px] mx-auto text-center'>
                <h3 className='text-[24px] font-bold text-black pt-[40px] pb-[20px]'>Which of these best describes the incident?</h3>
                <div className='grid md:grid-cols-4 gap-2.5'>
                    {Incidents3Data.map((data, i) => (
                        <IncidentsCommon2 key={i} {...data} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Incidents3
