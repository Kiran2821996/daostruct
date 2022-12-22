import axios from "axios";
import React, { useEffect, useState } from "react";
import X7Item from "./X7Item";


function InfiniteScroll() {
  const [starttime, setStartTime] = useState(1);
  const [endtime, setEndTime] = useState(7);
  let setstart = new Date(new Date().setDate(new Date().getDate() - starttime));
  let start = JSON.stringify(setstart).split("").slice(1, 11).join("");
  let setend = new Date(new Date().setDate(new Date().getDate() - endtime));
  let end = JSON.stringify(setend).split("").slice(1, 11).join("");
  const [startDate, setStartDate] = useState(start);
  const [endDate, setEndDate] = useState(end);
  const [infiniteData, setInfiniteData] = useState([]);

  //handle infinite call 
  useEffect(() => {
    setTimeout(async () => {
      const response = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=gaff4Pwpu0Qg6woyFty1YhVRxhj4In1ImvOCyFD7&start_date=${endDate}&end_date=${startDate}&thumbs=true`
      );
      console.log(response)
      setInfiniteData((prev) => {
        return [...prev,response.data.reverse()]
      });
    }, 100);
  }, [ endDate, startDate]);

  //handle scroll function
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = async () => {
    console.log(window.innerHeight,document.documentElement.scrollTop,document.documentElement.scrollHeight)
    if (
      window.innerHeight + document.documentElement.scrollTop+1<=
      document.documentElement.scrollHeight
    ) {
      setStartTime((prev) => prev + 7);
      setEndTime((prev) => prev + 7);
      setstart = new Date(new Date().setDate(new Date().getDate() - starttime));
      start = JSON.stringify(setstart).split("").slice(1, 11).join("");
      setend = new Date(new Date().setDate(new Date().getDate() - endtime));
      end = JSON.stringify(setend).split("").slice(1, 11).join("");
      setStartDate(start);
      setEndDate(end);
    }
  };

  //handle window scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div >
      {infiniteData?.map((ele) => (
        <X7Item data={ele} />
      ))}
    </div>
  );
}

export default InfiniteScroll;
