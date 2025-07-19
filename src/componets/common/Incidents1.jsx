export const IncidentsCommon = ({img, title, des1}) => (
    <div  className='bg-[#F4F4F5] border-1 border-gray-300 rounded-xl p-5'>
        <img className='max-md:mx-auto' src={img} alt="" />
        <h3 className='pt-[65px] pb-5 text-[20px] font-bold text-black'>{title}</h3>
        <h3>{des1}</h3>
    </div>
)