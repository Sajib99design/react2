import React from 'react'
import { dashboard } from '../lib'
import { useNavigate } from 'react-router-dom'
function Incidents() {

    const Navigate = useNavigate();
    const handleClick = () => {
        Navigate('/Incidents2');
    }
    return (
        <section className='max-w-[1300px] mx-auto pt-6'>
            <div className='pb-15 md:flex justify-between items-center max-md:text-center pt-8'>
                <div className='pb-4'>
                    <p className='text-[12px]'>Home - Incidents</p>
                    <h2 className='text-[26px] font-bold text-black'>Incidents</h2>
                </div>
                <div>
                    <div action="#" className='space-x-4 max-sm:space-y-4'>
                        <input className=' outline-1 outline-gray-300 shadow-md rounded-sm p-2.5' type="text" placeholder='Search incident' />
                        <input className=' outline-1 outline-gray-300 shadow-md rounded-sm p-2.5' type="submit" value='Sort By: Date modified' />
                        {/* <input className='bg-orange py-2 px-6 rounded-sm text-white' type="submit" value='' /> */}
                        <button onClick={handleClick} className='bg-orange py-2 px-6 rounded-sm text-white' > <img src={'./pluse.png'} alt="" className='inline-block pr-2' /> New Incident </button>
                    </div>


                </div>
            </div>
            <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-9 max-md:text-center'>
                {dashboard.map(({ img, title, des1, dollar }, i) => (
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

export default Incidents
