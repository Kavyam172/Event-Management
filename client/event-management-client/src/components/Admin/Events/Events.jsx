import { motion } from "framer-motion";

import Header from "../Header/Header";
import StatCard from "../StatCard/StatCard";
import axios from "axios";

import { AlertTriangle, DollarSign, Package, TrendingUp } from "lucide-react";
import CategoryDistributionChart from "../Overview/CategoryDist/CategoryDist";
import SalesTrendChart from "./SalesTrend/SalesTrend";
import EventsTable from "./EventsTable/EventsTable";
import { useEffect, useState } from "react";

const EventsPage = () => {
	const [totalEvents, setTotalEvents] = useState(0);
	const [topSelling, setTopSelling] = useState(0);
	const [lowStock, setLowStock] = useState(0);
	const [totalRevenue, setTotalRevenue] = useState(0);

	//get total events
	const getTotalEvents = async () => {
		try {
			const res = await axios.get("http://localhost:3000/stats/total-events");
			setTotalEvents(res.data[0].total);
		} catch (err) {
			console.error(err);
		}
	};

	//get total revenue
	const getTotalRevenue = async () => {
		try {
			const res = await axios.get("http://localhost:3000/stats/total-sales");
			setTotalRevenue(res.data[0].total);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		getTotalEvents();
		getTotalRevenue();
	}, []);
	return (
		<div className='ml-20 flex-1 overflow-auto relative z-10'>
			<Header title='Events' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				{/* STATS */}
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard name='Total Events' icon={Package} value={totalEvents} color='#6366F1' />
					<StatCard name='Top Selling' icon={TrendingUp} value={89} color='#10B981' />
					<StatCard name='Low Stock' icon={AlertTriangle} value={23} color='#F59E0B' />
					<StatCard name='Total Revenue' icon={DollarSign} value={totalRevenue} color='#EF4444' />
				</motion.div>

				<EventsTable />

				{/* CHARTS */}
				<div className='grid grid-col-1 lg:grid-cols-2 gap-8'>
					<SalesTrendChart />
					<CategoryDistributionChart />
				</div>
			</main>
		</div>
	);
};
export default EventsPage;