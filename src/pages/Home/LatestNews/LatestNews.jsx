import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex gap-5 p-4 bg-[#F3F3F3]">
      <button className="btn bg-[#D72050] text-white">Latest</button>
      <Marquee pauseOnHover={true}>
        Match Highlights: Germany vs Spain — as it happened ! Match Highlights:
        Germany vs Spain as...
      </Marquee>
    </div>
  );
};

export default LatestNews;
