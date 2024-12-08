import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import axios from "axios";

// const salesData = [
// 	{ month: "Jan", sales: 4000 },
// 	{ month: "Feb", sales: 3000 },
// 	{ month: "Mar", sales: 5000 },
// 	{ month: "Apr", sales: 4500 },
// 	{ month: "May", sales: 6000 },
// 	{ month: "Jun", sales: 5500 },
// ];

const months = [
	{ id: 1, month: "Jan" },
	{ id: 2, month: "Feb" },
	{ id: 3, month: "Mar" },
	{ id: 4, month: "Apr" },
	{ id: 5, month: "May" },
	{ id: 6, month: "Jun" },
	{ id: 7, month: "Jul" },
	{ id: 8, month: "Aug" },
	{ id: 9, month: "Sep" },
	{ id: 10, month: "Oct" },
	{ id: 11, month: "Nov" },
	{ id: 12, month: "Dec" },
];

const SalesTrendChart = () => {
	const [salesData, setSalesData] = useState([]);
	//get sales data
	const getSalesData = async () => {
		try {
			const res = await axios.get("http://localhost:3000/stats/sales-by-month");
			// console.log(res);
			const data = res.data;
			// get sales data for last 6 months in the required format
			const salesData = months.map((month) => {
				const monthData = data.find((item) => item._id.month === month.id);
				if (monthData) {
					return { month: month.month, sales: monthData.total };
				} 
				// if no data is available for a month do not display it
				else {
					return { month: month.month, sales: 0 };
				}
			});
			console.log(salesData);
			setSalesData(salesData.filter((item) => item.sales !== 0));
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
			transition={{ delay: 0.3 }}
		>
			<h2 className='text-xl font-semibold text-gray-100 mb-4'>Sales Trend</h2>
			<div style={{ width: "100%", height: 300 }}>
				<ResponsiveContainer>
					<LineChart data={salesData}>
						<CartesianGrid strokeDasharray='3 3' stroke='#374151' />
						<XAxis dataKey='month' stroke='#9CA3AF' />
						<YAxis stroke='#9CA3AF' />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Legend />
						<Line type='monotone' dataKey='sales' stroke='#8B5CF6' strokeWidth={2} />
					</LineChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};
export default SalesTrendChart;