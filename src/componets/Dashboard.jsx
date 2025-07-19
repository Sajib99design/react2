import React from 'react'
import { dashboard } from '../lib'
function Dashboard() {

    return (
        <section className='max-w-[1300px] mx-auto pt-6'>
                <div className='pb-15 md:flex justify-between items-center max-md:text-center pt-8'>
                    <div className='pb-4'>
                        <p className='text-[12px]'>Welcome back</p>
                        <h2 className='text-[26px] font-bold text-black'>Dashboard</h2>
                    </div>
                    <div>
                        <form action="#" className='space-x-4 max-sm:space-y-4'>
                            <input className=' outline-1 outline-gray-300 shadow-md rounded-sm p-2.5' type="text" placeholder='Search incident' />
                            <input className=' outline-1 outline-gray-300 shadow-md rounded-sm p-2.5' type="submit" value='Sort By: Date modified' />
                            <input className='bg-orange py-2 px-6 rounded-sm text-white' type="submit" value='Cypher AI ' />
                        </form>
                    </div>
                </div>
            <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-9 max-md:text-center'>
                {dashboard.map(({img, title, des1, dollar}, i) => (
                    <div className='space-y-3' key={i}>
                        <img src={img} alt="" className='mx-auto' />
                        <h3 className='text-[16px] font-bold text-black'>{title}</h3>
                        <p className='font-normal'>{des1}</p>
                        <h3 className='text-[16px] font-bold text-black'>{dollar}</h3>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Dashboard
