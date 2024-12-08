import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

import axios from "axios";
// const dailyOrdersData = [
// 	{ date: "07/01", orders: 45 },
// 	{ date: "07/02", orders: 52 },
// 	{ date: "07/03", orders: 49 },
// 	{ date: "07/04", orders: 60 },
// 	{ date: "07/05", orders: 55 },
// 	{ date: "07/06", orders: 58 },
// 	{ date: "07/07", orders: 62 },
// ];

const DailyOrders = () => {
	const [dailyOrdersData, setDailyOrdersData] = useState([]);

	//get daily orders data
	const getDailyOrdersData = async () => {
		try {
			const res = await axios.get("http://localhost:3000/stats/bookings-by-date");
			console.log(res);
			const data = res.data;
			const dailyOrdersData = data.map((item) => {
				return { date: item._id, orders: item.total };
			});
			setDailyOrdersData(dailyOrdersData);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		getDailyOrdersData();
	}, []);

	return (
		<motion.div
			className='bg-[#510f90] bg-opacity-80 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
			<h2 className='text-xl font-semibold text-gray-100 mb-4'>Daily Orders</h2>

			<div style={{ width: "100%", height: 300 }}>
				<ResponsiveContainer>
					<LineChart data={dailyOrdersData}>
						<CartesianGrid strokeDasharray='3 3' stroke='#374151' />
						<XAxis dataKey='date' stroke='#9CA3AF' />
						<YAxis stroke='#9CA3AF' />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Legend />
						<Line type='monotone' dataKey='orders' stroke='#8B5CF6' strokeWidth={2} />
					</LineChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};
export default DailyOrders;