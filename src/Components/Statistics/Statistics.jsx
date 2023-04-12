import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
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
            
            <ComposedChart
      width={800}
      height={400}
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="name" scale="band" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="mark" barSize={20} fill="#413ea0" />
      <Line type="monotone" dataKey="mark" stroke="#ff7300" />
    </ComposedChart>
        </div>
    );
};

export default Statistics;