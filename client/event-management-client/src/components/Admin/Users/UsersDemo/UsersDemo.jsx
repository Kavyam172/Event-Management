import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import axios from "axios";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088FE"];

// const userDemographicsData = [
// 	{ name: "18-24", value: 20 },
// 	{ name: "25-34", value: 30 },
// 	{ name: "35-44", value: 25 },
// 	{ name: "45-54", value: 15 },
// 	{ name: "55+", value: 10 },
// ];

const UserDemographicsChart = () => {
	const [userDemographicsData, setUserDemographicsData] = useState([]);

	//get user demographics data
	const getUserDemographicsData = async () => {
		try {
			const res = await axios.get("http://localhost:3000/stats/users-by-age");
			console.log(res);
			//convert data to the format required by recharts
			const data = res.data;
			const userDemographicsData = data.map((item) => {
				return { name: item._id, value: item.total };
			});
			setUserDemographicsData(userDemographicsData);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		getUserDemographicsData();
	}, []);
	return (
		<motion.div
			className='bg-[#510f90] bg-opacity-80 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 lg:col-span-2'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.5 }}
		>
			<h2 className='text-xl font-semibold text-gray-100 mb-4'>User Demographics(By Age)</h2>
			<div style={{ width: "100%", height: 300 }}>
				<ResponsiveContainer>
					<PieChart>
						<Pie
							data={userDemographicsData}
							cx='50%'
							cy='50%'
							outerRadius={100}
							fill='#8884d8'
							dataKey='value'
							label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
						>
							{userDemographicsData.map((entry, index) => (
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
export default UserDemographicsChart;