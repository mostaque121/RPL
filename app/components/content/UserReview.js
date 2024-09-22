import UserReviewCard from "../card/UserReviewCard";
import Modal from "../modal/Modal";
const UserReview = () => {
    return (
        <div className="py-3">
            <h1 className="text-3xl font-semibold text-center">What Our Clients Say</h1>
            <div className="grid mt-5 gap-5 sm:grid-cols-2">
                <UserReviewCard/>
                <UserReviewCard/>
                <UserReviewCard/>
                <UserReviewCard/>
                <UserReviewCard/>
                <UserReviewCard/>
            </div>
            <Modal/>
        </div>
    );
};

export default UserReview;