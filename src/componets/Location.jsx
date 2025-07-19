import React from 'react'
import { locationData1, locationData2, activityData, activityData2 } from '../lib'
import { Activity } from './common/Activity'

function Location() {
    return (
        <section className='max-w-[1300px] mx-auto pt-6'>
            <div className='pb-15 md:flex justify-between items-center max-md:text-center pt-8'>
                <div className='pb-4'>
                    <p className='text-[12px]'>Incidents - DR-4699 March 2023 Severe Storms </p>
                    <h2 className='text-[26px] font-bold text-black'> <img src={'./location1.png'} className='inline-block mr-2 -mt-1' alt="" /> DR-4699 March 2023 Severe Storms</h2>
                </div>
                <div>
                    <form action="#" className='space-x-4 max-sm:space-y-4'>
                        <input className=' outline-1 outline-gray-300 shadow-md rounded-sm p-2.5' type="text" placeholder='Search incident' />
                        <input className=' outline-1 outline-gray-300 shadow-md rounded-sm p-2.5' type="submit" value='Sort By: Date modified' />
                        <input className='bg-orange py-2 px-6 rounded-sm text-white' type="submit" value='Cypher AI ' />
                    </form>
                </div>
            </div>
            <div className='grid md:grid-cols-2'>
                <div className='max-md:text-center'>
                    {locationData1.map(({ img, title, title2 }, i) => (
                        <div key={i} className='md:flex gap-3 items-center  mb-[30px]'>
                            <div className='max-md:mx-auto max-md:inline-block max-md:text-center'>
                                <img src={img} alt="" />
                            </div>
                            <div>
                                <p className='pb-3'>{title}</p>
                                <h3 className='text-[20px] font-bold text-black'>{title2}</h3>
                            </div>
                        </div>
                    ))}
                    <div className='py-7 mb-7 border-y-1 border-gray-300'>
                        <h4 className='text-black font-bold'>Description</h4>
                        <p>Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werho</p>
                    </div>

                    {/* location  */}
                    <div className='grid md:grid-cols-3  gap-x-6 gap-y-9 max-md:text-center border-b-1 pb-7'>
                        {locationData2.map(({ img, title, des1, dollar }, i) => (
                            <div className='space-y-3' key={i}>
                                <img src={img} alt="" className='mx-auto' />
                                <h3 className='text-[16px] font-bold text-black'>{title}</h3>
                                <p className='font-normal'>{des1}</p>
                                <h3 className='text-[16px] font-bold text-black'>{dollar}</h3>
                            </div>
                        ))}
                    </div>
                    {/* activities  */}

                    <div className='pt-7 pb-7 border-b-1 mb-7'>
                        <div className='flex justify-between pb-1'>
                            <h4>Activities</h4>
                            <a href="#">See all</a>
                        </div>
                        <div>
                            {activityData.map((data, i) => (
                                <Activity key={i} {...data} />
                            ))}
                        </div>
                    </div>
                    <div className='pt-7'>
                        <div className='flex justify-between pb-1'>
                            <h4>Documents</h4>
                            <a href="#">See all</a>
                        </div>
                        <div>
                            {activityData2.map((data, i) => (
                                <Activity key={i} {...data} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className='md:pl-20'>
                    <p className='pb-3'>Incident Map</p>
                    <img src={'./map.png'} alt="" />
                    <p className='pt-3'>Start 19.1232, -118.233     End 19.3245, -119.2323</p>
                </div>
            </div>
        </section>
    )
}

export default Location
