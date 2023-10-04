import PropTypes from "prop-types";
import { FaBookmark, FaStar } from "react-icons/fa";
import { BsFillEyeFill, BsShare } from "react-icons/bs";
import { Link } from "react-router-dom";

const NewsCard = ({ singleNews }) => {
  const { _id, total_view, title, author, image_url, details, rating } =
    singleNews || {};

  return (
    <div className="mb-6">
      <div className="flex justify-between bg-[#F3F3F3] px-5 py-4 rounded-t-md">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 h-10">
              <img src={author?.img} className="rounded-full" />
            </div>
          </div>
          <div>
            <h3 className="font-semibold">{author?.name}</h3>
            <p>{author?.published_date}</p>
          </div>
        </div>
        <div className="flex items-center text-2xl gap-2">
          <FaBookmark></FaBookmark>
          <BsShare></BsShare>
        </div>
      </div>
      <div className="border-x border-b rounded-b-md px-5 pb-5 pt-3">
        <h2 className="text-xl font-bold mb-5">{title}</h2>
        <img src={image_url} className="rounded-md mb-7" />
        {
            details.length > 220 
            ? <p>{details.slice(0, 220)}... <Link to={`/news/${_id}`} className="text-[#FF8C47] text-lg font-semibold block">Read More</Link></p>
            : <p>{details}</p>
        }
        <hr className="my-4" />
        <div className="flex justify-between">
            <div className="flex gap-3 items-center">
                <div className="flex text-2xl">
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                </div>
                <span className="text-[#706F6F] font-medium">{rating?.number}</span>
            </div>
            <div className="flex gap-3 items-center">
                <BsFillEyeFill className="text-2xl"></BsFillEyeFill>
                <span className="text-[#706F6F] font-medium">{total_view}</span>
            </div>
        </div>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  singleNews: PropTypes.object,
};

export default NewsCard;
