import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

const Statistics = () => {

    const data = [
        {
          name: "Assignment1",
          mark: 60,
          
        },
        {
          name: "Assignment2",
          mark: 55,
          
        },
        {
          name: "Assignment3",
          mark: 58,
         
        },
        {
          name: "Assignment4",
          mark: 33,
         
        },
        {
          name: "Assignment5",
          mark: 59,
          
        },
        {
          name: "Assignment6",
          mark: 54,
         
        },
        {
          name: "Assignment7",
          mark: 58,
          
        },
        {
          name: "Assignment8",
          mark: 60,
          
        }
      ];
    return (
        <div>
            
            <AreaChart
      width={1000}
      height={500}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="mark" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
        </div>
    );
};

export default Statistics;