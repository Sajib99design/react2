export const IncidentsCommon2 = ({ img, title }) => (
    <>
        <div>
            <div className='bg-[#F4F4F5]  border-1 border-gray-300 rounded-xl p-6 flex items-center gap-3 hover:bg-orange transition duration-300'>
                <img className="w-6 h-6" src={img} alt="" />
                <p className=' text-[#71717A]'>{title}</p>
            </div>
        </div>
    </>
)