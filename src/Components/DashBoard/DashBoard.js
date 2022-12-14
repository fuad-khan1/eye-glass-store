import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { LineChart,Line,XAxis ,YAxis,PieChart,Pie,Legend,Tooltip} from 'recharts';

const DashBoard = () => {
    const data =[
        {
            month: "Mar",
            "investment": 100000,
            sell: 241,
            revenue: 10401
        },
        {
            month: "Apr",
            "investment": 200000,
            sell: 423,
            revenue: 24500
        },
        {
            month: "May",
            "investment": 500000,
            sell: 726,
            revenue: 67010
        },
        {
            month: "Jun",
            "investment": 500000,
            sell: 529,
            revenue: 40405
        },
        {
            month: "Jul",
            "investment": 600000,
            sell: 601,
            revenue: 50900
        },
        {
            month: "Aug",
            "investment": 700000,
            sell: 670,
            revenue: 61000
        }
    ]
    return (
        <div>
            <LineChart
          width={500}
          height={300}
          data={data}
         
        >
          <XAxis dataKey="revenue" />
          <YAxis/>
          <Tooltip />
          <Legend />
          
          <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
          <Line type="monotone" dataKey="sell" stroke="#82ca9d" />
        </LineChart>
<PieChart width={400} height={400}>
        <Pie data={data} dataKey="revenue" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
        <Pie data={data} dataKey="sell" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
      </PieChart>

        </div>
         
            
           
        
    );
};

export default DashBoard;