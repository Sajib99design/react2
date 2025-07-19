export const Activity = ({ img, title, des1, dollar }) => (
    <>
        <div className='flex gap-3 items-center bg-[#F4F4F5] p-3 rounded-md mb-3'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='space-y-2'>
                <h4 className='font-bold text-[16px] text-black'>{title}</h4>
                <p>{des1}</p>
                <h4 className='font-bold text-[16px] text-black'>{dollar}</h4>
            </div>
        </div>
    </>

)