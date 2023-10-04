import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import LatestNews from "./LatestNews/LatestNews";
import LeftSideNav from "./LeftSideNav/LeftSideNav";
import NewsCard from "./NewsCard";


const Home = () => {
    const news = useLoaderData();

    return (
        <div>
            <Header></Header>
            <LatestNews></LatestNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="col-span-2">
                    {
                        news?.map(singleNews => <NewsCard key={singleNews?._id} singleNews={singleNews}></NewsCard>)
                    }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;