import { Link } from "react-router-dom";
import ArrowButton from "../assets/ArrowButton.png";

const Home = () => {
  return (
    <div className="relative">
      <div className="flex justify-between items-center h-[calc(100vh-64px)]">
        <div className="flex items-center w-[150px] justify-between ml-[32px] relative">
          <div className="w-[602px] h-[602px] border-2 border-dotted border-bluegray absolute transform -translate-x-[75%] rotate-45"></div>
          <div className="w-[44px] h-[44px] relative z-10">
            <img
              src={ArrowButton}
              alt="Arrow button"
              className="w-full h-full object-cover transform -scale-x-100 hover:[transform:scale(1.10)_scaleX(-1)] transition-transform duration-300 cursor-pointer"
            />
          </div>
          <p className="roobert-font text-[14px]">DISCOVER A.I.</p>
        </div>

        <div className="flex flex-col justify-between items-center">
          <h1 className="roobert-font h1-home">Sophisticated</h1>
          <h1 className="roobert-font h1-home">skincare</h1>
        </div>

        <div className="flex items-center w-[127px] justify-between mr-[32px] relative">
          <div className="w-[602px] h-[602px] border-2 border-dotted border-bluegray absolute rotate-45 z-0"></div>
          <p className="roobert-font text-[14px]">TAKE TEST</p>
          <Link to={"/testing"}>
            <div className="w-[44px] h-[44px] relative z-10">
              <img
                src={ArrowButton}
                alt="Arrow button"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
              />
            </div>
          </Link>
        </div>
      </div>
      <p className="roobert-font font-light absolute h-[72px] text[14px] bottom-7 left-[32px] leading-[24px] uppercase tracking-[0]">
        Skinstric developed an A.I. that creates 
        <br/>
        a highly-personalized routine tailored to
        <br />
        what your skin needs.
      </p>
    </div>
  );
};

export default Home;
