import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";

// const userGrowthData = [
// 	{ month: "Jan", users: 1000 },
// 	{ month: "Feb", users: 1500 },
// 	{ month: "Mar", users: 2000 },
// 	{ month: "Apr", users: 3000 },
// 	{ month: "May", users: 4000 },
// 	{ month: "Jun", users: 5000 },
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

const UserGrowthChart = () => {
	const [userGrowthData, setUserGrowthData] = useState([]);

	//get user growth data
	const getUserGrowthData = async () => {
		try {
			const res = await axios.get("http://localhost:3000/stats/users-by-month");
			console.log(res);
			const data = res.data;
			// get user growth data for last 12 months in the required format
			const growthData = months.map((month) => {
				const monthData = data.find((item) => item._id.month === month.id);
				if (monthData) {
					return { month: month.month, users: monthData.total };
				} 
				else {
					return { month: month.month, users: 0 };
				}
			});

			setUserGrowthData(growthData);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		getUserGrowthData();
	}, []);
	return (
		<motion.div
			className='bg-[#510f90] bg-opacity-80 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.3 }}
		>
			<h2 className='text-xl font-semibold text-gray-100 mb-4'>User Growth</h2>
			<div className='h-[320px]'>
				<ResponsiveContainer width='100%' height='100%'>
					<LineChart data={userGrowthData}>
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
						<Line
							type='monotone'
							dataKey='users'
							stroke='#8B5CF6'
							strokeWidth={2}
							dot={{ fill: "#8B5CF6", strokeWidth: 2, r: 4 }}
							activeDot={{ r: 8 }}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};
export default UserGrowthChart;