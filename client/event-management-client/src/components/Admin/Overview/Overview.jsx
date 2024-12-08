import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import axios from "axios";

import Header from "../Header/Header";
import StatCard from "../StatCard/StatCard";
import SalesOverviewChart from "./SalesDist/SalesDist";
import CategoryDistributionChart from "./CategoryDist/CategoryDist";
import { useState } from "react";

const OverviewPage = () => {
	const [totalSales,setTotalSales] = useState(0);
	const [totalUsers,setTotalUsers] = useState(0);
	const [totalEvents,setTotalevents] = useState(0);

	//get total sales
	const getTotalSales = async () => {
		try {
			const res = await axios.get("http://localhost:3000/stats/total-sales");
			// console.log(res)
			setTotalSales(res.data[0].total);
		} catch (err) {
			console.error(err);
		}
	};

	//get total users
	const getTotalUsers = async () => {
		try {
			const res = await axios.get("http://localhost:3000/stats/total-users");
			// console.log(res)
			setTotalUsers(res.data[0].total);
		} catch (err) {
			console.error(err);
		}
	};

	//get total events
	const getTotalEvents = async () => {
		try {
			const res = await axios.get("http://localhost:3000/stats/total-events");
			setTotalevents(res.data[0].total);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		console.log(totalEvents)
		console.log(totalSales)
		console.log(totalUsers)
		getTotalSales();
		getTotalUsers();
		getTotalEvents();
	}, []);


	return (
		<div className='ml-20 flex-1 overflow-auto z-10'>
			<Header title='Overview' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard name='Total Sales' icon={Zap} value={totalSales} color='#6366F1' />
					<StatCard name='Total Users' icon={Users} value={totalUsers} color='#8B5CF6' />
					<StatCard name='Total Events' icon={ShoppingBag} value={totalEvents} color='#EC4899' />
					<StatCard name='Conversion Rate' icon={BarChart2} value='12.5%' color='#10B981' />
				</motion.div>


				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
					<SalesOverviewChart />
					<CategoryDistributionChart />
				</div>
			</main>
		</div>
	);
};
export default OverviewPage;