import bgImg from "../assets/img/bg1.jpg";
import Navbar from "./Navbar";

const FlowerLandingPage = () => {
  return (
    <div className="h-full w-full text-[#5b2b59]">
      <div className="grid md:grid-cols-3 h-screen ">
        <div
          className="hidden md:flex justify-center "
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          {" "}
          <span className="font-playfair text-5xl text-white tracking-widest mt-32">
            Nature
          </span>
        </div>
        <div className="col-span-2">
          <div>
            <Navbar />
          </div>
          <div className="my-24 lg:mx-32 mx-24 ">
            <h2 className="my-3 text-2xl ">All you need is </h2>
            <h1 className="my-3 text-6xl tracking-widest font-playfair ">
              BEAUTY
            </h1>
            <h3 className="my-3 text-xl italic text-[#7b3d79]">
              and harmony with the world
            </h3>
            <p className="text-gray-400 my-3 text-sm">
              Beauty is a captivating harmony that enchants the senses. It
              transcends mere appearance, reflecting a profound elegance and
              allure that resonates deeply within.
            </p>
            <button className="bg-[#5b2b59] tracking-widest font-playfair text-white font-semibold py-2 px-5 my-4 uppercase">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowerLandingPage;
