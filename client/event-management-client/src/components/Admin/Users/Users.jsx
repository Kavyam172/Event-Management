import { UserCheck, UserPlus, UsersIcon, UserX } from "lucide-react";
import { motion } from "framer-motion";

import Header from "../Header/Header";
import StatCard from "../StatCard/StatCard";
import UsersTable from "./UsersTable/UsersTable";
import UserGrowthChart from "./GrowthChart/GrowthChart";
import UserActivityHeatmap from "./ActivityMap/ActivityMap";
import UserDemographicsChart from "./UsersDemo/UsersDemo";
import { useEffect, useState } from "react";
import axios from "axios";

// const userStats = {
// 	totalUsers: 152845,
// 	newUsersToday: 243,
// 	activeUsers: 98520,
// 	churnRate: "2.4%",
// };

const UsersPage = () => {
	const [totalUsers, setTotalUsers] = useState(0);
	const [newUsersToday, setNewUsersToday] = useState(0);

	//get new users today
	const getNewUsersToday = async () => {
		try {
			const res = await axios.get("http://localhost:3000/stats/new-users-today");
			setNewUsersToday(res.data[0].total);
		} catch (err) {
			console.error(err);
		}
	}

	//get total users
	const getTotalUsers = async () => {
		try {
			const res = await axios.get("http://localhost:3000/stats/total-users");
			setTotalUsers(res.data[0].total);
		} catch (err) {
			console.error(err);
		}
	}

	useEffect(() => {
		getTotalUsers();
		getNewUsersToday();
	}, []);
	
	return (
		<div className='ml-20 flex-1 overflow-auto relative z-10'>
			<Header title='Users' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				{/* STATS */}
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard
						name='Total Users'
						icon={UsersIcon}
						value={totalUsers}
						color='#6366F1'
					/>
					<StatCard name='New Users Today' icon={UserPlus} value={newUsersToday} color='#10B981' />
					<StatCard
						name='Active Users'
						icon={UserCheck}
						value={1}
						color='#F59E0B'
					/>
					<StatCard name='Churn Rate' icon={UserX} value={1} color='#EF4444' />
				</motion.div>

				<UsersTable />

				{/* USER CHARTS */}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8'>
					<UserGrowthChart />
					<UserActivityHeatmap />
					<UserDemographicsChart />
				</div>
			</main>
		</div>
	);
};
export default UsersPage;