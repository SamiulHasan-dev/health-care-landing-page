import banner from '../assets/Rectangle 5.png';

const Banner = () => {
    return (
        <div>
            <div className='w-full my-10 bg-no-repeat bg-cover h-[470px] rounded-badge' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 193, 157, 0), rgba(2, 0, 67, 0.47)), url(${banner})` }}>
            </div>
        </div>
    );
};

export default Banner;
