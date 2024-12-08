import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";

// const salesData = [
// 	{ name: "Jul", sales: 4200 },
// 	{ name: "Aug", sales: 3800 },
// 	{ name: "Sep", sales: 5100 },
// 	{ name: "Oct", sales: 4600 },
// 	{ name: "Nov", sales: 5400 },
// 	{ name: "Dec", sales: 7200 },
// 	{ name: "Jan", sales: 6100 },
// 	{ name: "Feb", sales: 5900 },
// 	{ name: "Mar", sales: 6800 },
// 	{ name: "Apr", sales: 6300 },
// 	{ name: "May", sales: 7100 },
// 	{ name: "Jun", sales: 7500 },
// ];

const months = [
	{id: 1, month: "Jan"},
	{id: 2, month: "Feb"},
	{id: 3, month: "Mar"},
	{id: 4, month: "Apr"},
	{id: 5, month: "May"},
	{id: 6, month: "Jun"},
	{id: 7, month: "Jul"},
	{id: 8, month: "Aug"},
	{id: 9, month: "Sep"},
	{id: 10, month: "Oct"},
	{id: 11, month: "Nov"},
	{id: 12, month: "Dec"},
];

const SalesOverviewChart = () => {
	const [salesData, setSalesData] = useState([]);
	//get sales data
	const getSalesData = async () => {
		try {
			const res = await axios.get("http://localhost:3000/stats/sales-by-month");
			// console.log(res);
			const data = res.data;
			// console.log(data);
			const salesData = months.map((month) => {
				const monthData = data.find((item) => item._id.month === month.id);
				if (monthData) {
					return { month: month.month, sales: monthData.total };
				} else {
					return { month: month.month, sales: 0 };
				}
			})
			setSalesData(salesData);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		// console.log("useEffect");
		getSalesData();
		// console.log(salesData);
	}, []);
	return (
		<motion.div
			className='bg-[#510f90] bg-opacity-80 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
			<h2 className='text-lg font-medium mb-4 text-gray-100'>Sales Overview</h2>

			<div className='h-80'>
				<ResponsiveContainer width={"100%"} height={"100%"}>
					<LineChart data={salesData}>
						<CartesianGrid strokeDasharray='3 3' stroke='#4B5563' />
						<XAxis dataKey={"month"} stroke='#9ca3af' />
						<YAxis stroke='#9ca3af' />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Line
							type='monotone'
							dataKey='sales'
							stroke='#6366F1'
							strokeWidth={3}
							dot={{ fill: "#6366F1", strokeWidth: 2, r: 6 }}
							activeDot={{ r: 8, strokeWidth: 2 }}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};
export default SalesOverviewChart;