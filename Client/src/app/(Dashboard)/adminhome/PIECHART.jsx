import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const PIECHART = () => {
    // Sample data
    const data = [
        { name: 'Geeksforgeeks', students: 400 },
        { name: 'Technical scripter', students: 700 },
        { name: 'Geek-i-knack', students: 200 },
        { name: 'Geek-o-mania', students: 1000 }
    ];

    // Define an array of colors to use for each item
    const colors = ['#0074D9', '#2ECC40', '#7FDBFF', '#FF4136'];

    return (
        <PieChart width={800} height={500}>
            <Pie data={data} dataKey="students" outerRadius={250}>
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index]} />
                ))}
            </Pie>
        </PieChart>
    );
}

export default PIECHART;
