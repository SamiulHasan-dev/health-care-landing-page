import pie from '../assets/Group 12.png'
import video from '../assets/Group.png'
import contact from '../assets/contract (1) 1.png'
import vector from '../assets/Vector.png'
import group from '../assets/Group 7.png'
import coin from '../assets/coin.png'

const CarePatient = () => {
    return (
        <div className='grid grid-col-1 md:grid-cols-5 gap-4 mb-8'>
            <div className='p-6 space-y-4 bg-white rounded-2xl border'>
                <h2 className="text-3xl font-semibold">90%</h2>
                <p className=''>Patient satisfaction rate, reflecting our commitment.</p>
                <div className='pt-6'>
                    <img src={pie} alt="" />
                </div>
            </div>

            <div className='col-span-3 space-y-2'>
                {/* care section */}
                <div>
                    <h2 className="text-4xl font-bold text-center my-4">Comprehensive Care <br /> for Every Patient</h2>
                </div>

                <div className='flex gap-4 pt-5'>
                    {/* mini card */}
                    <div className='p-6  bg-white rounded-2xl border'>
                        <h2 className="text-3xl font-semibold">500+</h2>
                        <p>Board-certified doctors</p>
                        <div className='flex justify-end'>
                            <img src={contact} alt="" />
                        </div>
                    </div>
                    <div className='p-6 h-1/2 mt-auto bg-white rounded-2xl border'>
                        <div className='flex gap-2'>
                            <h2 className="text-3xl font-semibold">4.8</h2>
                            <img src={vector} alt="" />
                        </div>
                        <p >Over 20,000 Patient</p>
                        <div className='pt-6 '>
                            <img src={group} alt="" />
                        </div>
                    </div>
                    <div className='p-6  bg-white rounded-2xl border'>
                        <h2 className="text-3xl font-semibold">$5000</h2>
                        <p>Money spend for poor patient</p>
                        <div className='flex justify-end'>
                            <img src={coin} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='p-6 space-y-4 bg-white rounded-2xl border'>
                <h2 className="text-3xl font-semibold">50+</h2>
                <p>Free lession video
                    for patient</p>
                <div className='pt-10'>
                    <img src={video} alt="" />
                </div>
            </div>
        </div>
    );
};

export default CarePatient;