import { useEffect, useState } from "react";
import ArrowButton from "../assets/ArrowButton.png";

const Testing = () => {
  const [userName, setUserName] = useState("Tayler");
  const [cityName, setCityName] = useState("keo");

  const submitData = async () => {
    const data = {
      name: userName,
      location: cityName,
    };

    try {
    const response = await fetch("https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseOne", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    console.log(response)
    if (response.ok) {
        const result = await response.json();
      console.log(result);
    } else {
      console.error(response.status);
    }
  } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    submitData()
  }, []);


  return (
    <div className="flex items-center justify-center">
      <div className="absolute left-[32px] top-[86px]">
        <p className="roobert-font font-bold">TO START ANALYSIS</p>
      </div>
      <div className="w-[762px] h-[762px] flex justify-center items-center flex-col">
        <p className="font-roobert text-eerie-40 text[14px] h-[24px]">
          CLICK TO TYPE
        </p>
        <div className="flex justify-center items-center flex-col">
          <input
            type="text"
            placeholder="Introduce Yourself"
            className="roobert-font text-[60px] tracking-[-0.07em] text-center focus:outline-none focus:border-transparent"
          />
          <div className="h-[1px] w-[417px] bg-eerie"></div>
        </div>
      </div>
      <div className="flex justify-between items-center absolute bottom-[32px] left-[32px] w-[97px] h-[44px]">
        <div className="w-[44px] h-[44px]">
          <img
            src={ArrowButton}
            alt="Arrow button"
            className="w-full h-full object-cover transform -scale-x-100 hover:[transform:scale(1.10)_scaleX(-1)] transition-transform duration-300 cursor-pointer"
          />
        </div>
        <p className="roobert-font text-[14px]">BACK</p>
      </div>
    </div>
  );
};

export default Testing;
