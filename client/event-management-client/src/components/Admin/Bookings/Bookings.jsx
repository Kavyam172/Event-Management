import { CheckCircle, Clock, DollarSign, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

import Header from "../Header/Header";
import StatCard from "../StatCard/StatCard";
import DailyOrders from "./DailyBookings/DailyBookings";
import OrderDistribution from "./Distribution/Distribution";
import OrdersTable from "./BookingsTable/BookingsTable";
import { useEffect, useState } from "react";
import axios from "axios";

// const orderStats = {
// 	totalOrders: "1,234",
// 	pendingOrders: "56",
// 	completedOrders: "1,178",
// 	totalRevenue: "$98,765",
// };

const BookingsPage = () => {
	const [totalBookings, setTotalBookings] = useState(0);
	const [pendingBookings, setPendingBookings] = useState(0);
	const [completedBookings, setCompletedBookings] = useState(0);

	const [totalRevenue, setTotalRevenue] = useState(0);

	//get total bookings
	const getTotalBookings = async () => {
		try {
			const res = await axios.get("http://localhost:3000/stats/total-bookings");
			setTotalBookings(res.data[0].total);
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

	//get pending bookings
	const getBookingsByStatus = async () => {
		try {
			const res = await axios.get("http://localhost:3000/stats/bookings-by-payment-status");
			const data = res.data;
			const pending = data.find((item) => item._id === "pending");
			const completed = data.find((item) => item._id === "confirmed");
			setPendingBookings(pending ? pending.total : 0);
			setCompletedBookings(completed ? completed.total : 0);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		getTotalBookings();
		getBookingsByStatus();
		getTotalRevenue();
	}, []);
	return (
		<div className='ml-20 flex-1 relative z-10 overflow-auto'>
			<Header title={"Bookings"} />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard name='Total Bookings' icon={ShoppingBag} value={totalBookings} color='#6366F1' />
					<StatCard name='Pending Bookings' icon={Clock} value={pendingBookings} color='#F59E0B' />
					<StatCard
						name='Completed Bookings'
						icon={CheckCircle}
						value={completedBookings}
						color='#10B981'
					/>
					<StatCard name='Total Revenue' icon={DollarSign} value={totalRevenue} color='#EF4444' />
				</motion.div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
					<DailyOrders />
					<OrderDistribution />
				</div>

				<OrdersTable />
			</main>
		</div>
	);
};
export default BookingsPage;