import React from 'react'
import { Incidents3Data } from '../lib'
import { IncidentsCommon2 } from './common/IncidentsCommon2'
function Incidents5() {

    return (
        <section className='max-w-[1300px] mx-auto pt-6'>
            <div className='pb-15 md:flex justify-between items-center max-md:text-center pt-8'>
                <div className='pb-4'>
                    <p className='text-[12px]'>Home - Incidents - New Incident</p>
                    <h2 className='text-[26px] font-bold text-black'>New Incident</h2>
                </div>
                <div>
                    <form action="#" className='space-x-4 max-sm:space-y-4'>
                        <input className='w-[140px] text-center border-1 border-gray-300 bg-white py-2 px-6 rounded-sm text-black' type="submit" value='Back' />
                        <input className='max-w-[140px] text-center bg-orange py-2 px-6 rounded-sm text-white' type="submit" value='Finished' />
                    </form>
                </div>
            </div>
            <div className='space-y-3 max-w-[760px] mx-auto'>
                <h3 className='text-[24px] font-bold text-black'>Where’s the incident?</h3>
                <p>Enter a GPS, address. or pin point on the map. Try to be as accurate as possible, or click:Jurisdiction Wide</p>

                <div className='relative'>
                    <div className='absolute top-3 left-3 w-3xl'>
                        <input className='p-2.5 pl-8 w-1/3 text-[12px] bg-[#F4F4F5] border-1 border-gray-300 rounded-md outline-0 bg-[url(./search.png)] bg-no-repeat  customInput mb-2' type="text" placeholder='Enter incident address or GPS' /> <br />
                        <input className='p-2.5 pl-8 w-1/3 text-[12px] bg-[#F4F4F5] border-1 border-gray-300 rounded-md outline-0 bg-[url(./search.png)] bg-no-repeat  customInput' type="text" placeholder='Pinpoint damage' />
                    </div>
                    <img src={'./map.png'} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Incidents5;
