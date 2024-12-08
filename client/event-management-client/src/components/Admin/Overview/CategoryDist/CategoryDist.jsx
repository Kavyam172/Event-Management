import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";
import axios from "axios";

// const categoryData = [
// 	{ name: "Electronics", value: 4500 },
// 	{ name: "Clothing", value: 3200 },
// 	{ name: "Home & Garden", value: 2800 },
// 	{ name: "Books", value: 2100 },
// 	{ name: "Sports & Outdoors", value: 1900 },
// ];

const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];

const CategoryDistributionChart = () => {
	const [categoryData, setCategoryData] = useState([]);
	//get category data
	const getCategoryData = async () => {
		try {
			const res = await axios.get("http://localhost:3000/stats/sales-by-category");
			// console.log(res);
			//convert data to the format required by recharts
			const data = res.data;
			const categoryData = data.map((item) => {
				return { name: item._id, value: item.total};
			});
			console.log(categoryData);
			setCategoryData(categoryData);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		getCategoryData();
	}, []);
	return (
		<motion.div
			className='bg-[#510f90] bg-opacity-80 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.3 }}
		>
			<h2 className='text-lg font-medium mb-4 text-gray-100'>Category Distribution</h2>
			<div className='h-80'>
				<ResponsiveContainer width={"100%"} height={"100%"}>
					<PieChart>
						<Pie
							data={categoryData}
							cx={"50%"}
							cy={"50%"}
							labelLine={false}
							outerRadius={80}
							fill='#8884d8'
							dataKey='value'
							label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
						>
							{categoryData.map((entry, index) => (
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
export default CategoryDistributionChart;