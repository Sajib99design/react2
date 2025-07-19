import React from 'react'
import { Incidents2Data } from '../lib'
import { IncidentsCommon } from './common/Incidents1'
import { useNavigate } from 'react-router-dom';
function Incidents2() {
    const Navigate = useNavigate();
    const handleClick = () => {
        Navigate('/Incidents3');
    }
    return (
        <section className='pt-[80px] max-w-[1300px] mx-auto pt-6'>
            <div className='text-center'>
                <h2 className='text-3xl font-bold text-black pb-[14px]'> Let’s get started </h2>
                <p>Lorem ipsum dolar sit general sac mascho werhoLorem ipsum <br /> dolar sit general sac mascho werhoLorem ipsum dolar sit gene</p>
                <img className='max-w-[600px] py-8 mx-auto' src={'./line.png'} alt="" />
            </div>
            <div className='grid md:grid-cols-3 gap-[55px] max-md:text-center'>
                {Incidents2Data.map((data, i) => (
                    <IncidentsCommon key={i} {...data} />
                ))}
            </div>
            <div className='text-center pt-[85px]'>
                <button onClick={handleClick} className='bg-orange py-2 px-6  rounded-sm text-white'>Get started</button>
            </div>
        </section>
    )
}

export default Incidents2
