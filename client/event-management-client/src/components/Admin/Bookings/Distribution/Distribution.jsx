import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import axios from "axios";

// const orderStatusData = [
// 	{ name: "Pending", value: 30 },
// 	{ name: "Processing", value: 45 },
// 	{ name: "Shipped", value: 60 },
// 	{ name: "Delivered", value: 120 },
// ];
const COLORS = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FED766", "#2AB7CA"];

const OrderDistribution = () => {
	const [orderStatusData, setOrderStatusData] = useState([]);

	//get order status data
	const getOrderStatusData = async () => {
		try {
			const res = await axios.get("http://localhost:3000/stats/bookings-by-payment-status");
			console.log(res);
			//convert data to the format required by recharts
			const data = res.data;
			const orderStatusData = data.map((item) => {
				return { name: item._id, value: item.total };
			});
			setOrderStatusData(orderStatusData);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		getOrderStatusData();
	}, []);
	return (
		<motion.div
			className='bg-[#510f90] bg-opacity-80 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.3 }}
		>
			<h2 className='text-xl font-semibold text-gray-100 mb-4'>Order Status Distribution</h2>
			<div style={{ width: "100%", height: 300 }}>
				<ResponsiveContainer>
					<PieChart>
						<Pie
							data={orderStatusData}
							cx='50%'
							cy='50%'
							outerRadius={80}
							fill='#8884d8'
							dataKey='value'
							label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
						>
							{orderStatusData.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
							))}
						</Pie>
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Legend />
					</PieChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};
export default OrderDistribution;