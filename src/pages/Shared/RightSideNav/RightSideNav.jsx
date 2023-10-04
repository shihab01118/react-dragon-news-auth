import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import QZone1 from '../../../assets/qZone1.png'
import QZone2 from '../../../assets/qZone2.png'
import QZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Login With</h2>
        <div className="space-y-2">
          <button className="btn btn-outline w-full">
            <FaGoogle></FaGoogle> Google
          </button>
          <button className="btn btn-outline w-full">
            <FaGithub></FaGithub> Github
          </button>
        </div>
      </div>
      <div className="mt-5">
        <h2 className="text-2xl font-bold mb-4">Find Us On</h2>
        <div>
          <div className="flex items-center space-x-2 p-4 border rounded-t-lg">
            <FaFacebook></FaFacebook>
            <a href="#">Facebook</a>
          </div>
          <div className="flex items-center space-x-2 p-4 border-x">
            <FaTwitter></FaTwitter>
            <a href="#">Twitter</a>
          </div>
          <div className="flex items-center space-x-2 p-4 border rounded-b-lg">
            <FaInstagram></FaInstagram>
            <a href="#">Instagram</a>
          </div>
        </div>
      </div>
      <div className="mt-5 bg-[#F3F3F3] mb-5">
        <h2 className="text-2xl font-bold py-4 px-4">Q-Zone</h2>
        <div className="space-y-5 pb-4">
            <img src={QZone1} className="mx-auto" />
            <img src={QZone2} className="mx-auto" />
            <img src={QZone3} className="mx-auto" />
        </div>
      </div>
      <div className="text-center py-10 bg-[url('./src/assets/bg.png')] text-white">
        <h1 className="text-3xl font-bold">Create an Amazing Newspaper</h1>
        <p className="px-5 mt-5 mb-7">Discover thousands of options, easy to <br /> customize layouts, one- <br /> click to import demo <br /> and much more.</p>
        <button className="bg-[#D72050] py-4 px-5 text-xl font-semibold">Learn More</button>
      </div>
    </div>
  );
};

export default RightSideNav;
