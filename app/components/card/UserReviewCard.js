import { FaRegStar, FaStar } from "react-icons/fa6";
const UserReviewCard = () => {
    return (
        <div className="bg-white p-3 rounded-md">
           <div className="flex-wrap justify-between items-center flex">
                <div className="flex items-center gap-3">
                    <img className="w-14 h-14 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1DeyZNqRdLF9WiyJOo7YQW5HxbSp3F6tNQQ&s"></img>
                    <div>
                        <h3 className="text-lg">Mostaque Ahmad</h3>
                        <h4 className="text-sm text-charcoal">6 months ago</h4>
                    </div>
                </div>

                <div className="flex py-2 gap-2">
                    <FaStar className="text-blue-500" size={18} />
                    <FaStar className="text-blue-500" size={18} />
                    <FaStar className="text-blue-500" size={18} />
                    <FaStar className="text-blue-500" size={18} />
                    <FaRegStar className="text-blue-500" size={18} />
                </div>
           </div>
           <p className="mt-5 text-sm sm:text-base text-dark-gray">We have a track record of successfully helping individuals gain RPL certification, enabling them to achieve their career goals faster. Our success stories speak for themselves.</p>
        </div>
    );
};

export default UserReviewCard;