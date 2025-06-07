import ArrowButton from "../assets/ArrowButton.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useEffect, useState } from "react";

const Summary = () => {
  const [demoData, setDemoData] = useState({})
  const location = useLocation();

  useEffect(() => {
    const { userdata } = location.state || {};
    setDemoData(userdata);
    console.log(userdata);
  }, []);

  return (
    <div>Summary</div>
  )
}

export default Summary