import React from "react";
import Location from "./Location";
import Salary from "./Salary";
import JobpostingData from "../Components/JobpostingData";
import Workexpirens from "./Workexpirens";
import Employment from "./Employment";
import Expirens from "./Expirens";

const Sidebar = ({ handleChange, handleClick }) => {
  return (
    <div className=" space-y-5">
      <h3 className=" text-lg font-bold mb-2">Filter</h3>

      <Location handleChange={handleChange} />
      <Salary handleChange={handleChange} handleClick={handleClick} />
      <JobpostingData handleChange={handleChange} />
      <Workexpirens handleChange={handleChange} />
      <Employment handleChange={handleChange} />
      <Expirens handleChange={handleChange} />
    </div>
  );
};


export default Sidebar;
