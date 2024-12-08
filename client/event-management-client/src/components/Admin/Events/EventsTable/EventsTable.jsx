import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";

// const PRODUCT_DATA = [
// 	{ id: 1, name: "Wireless Earbuds", category: "Electronics", price: 59.99, stock: 143, sales: 1200 },
// 	{ id: 2, name: "Leather Wallet", category: "Accessories", price: 39.99, stock: 89, sales: 800 },
// 	{ id: 3, name: "Smart Watch", category: "Electronics", price: 199.99, stock: 56, sales: 650 },
// 	{ id: 4, name: "Yoga Mat", category: "Fitness", price: 29.99, stock: 210, sales: 950 },
// 	{ id: 5, name: "Coffee Maker", category: "Home", price: 79.99, stock: 78, sales: 720 },
// ];

const EventsTable = () => {
	const [events, setEvents] = useState([]);
	const [eventSales, setEventSales] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredProducts, setFilteredProducts] = useState(events);

	const handleSearch = (e) => {
		const term = e.target.value.toLowerCase();
		setSearchTerm(term);
		const filtered = events.filter(
			(product) => product.title.toLowerCase().includes(term) || product.category.toLowerCase().includes(term)
		);

		setFilteredProducts(filtered);
	};

	// get events
	const getEvents = async () => {
		try {
			const res = await axios.get("http://localhost:3000/events");
			console.log(res);
			setEvents(res.data)
		} catch (err) {
			console.error(err);
		}
	};

	//get event sales
	const getEventSales = async () => {
		try {
			const res = await axios.get("http://localhost:3000/stats/sales-by-event");
			console.log(res);
			// add sales data to the events
			const data = res.data;
			setEventSales(res.data)
		} catch (err) {
			console.error(err);
		}
	};


	useEffect(() => {
		getEvents();
		getEventSales()
	}, []);

	useEffect(() => {
		console.log("changed")
		console.log(events);
		setFilteredProducts(events);
	}, [events]);

	useEffect(()=>{
		//add sales to events
		const updatedEvents = events.map((event)=>{
			const sale = eventSales.find((item)=>item._id.id===event._id)
			if(sale){
				return {...event, sales:sale.total}
			}
			else{
				return {...event, sales:0}
			}
		})
		setEvents(updatedEvents)
	},[eventSales])

	return (
		<motion.div
			className='bg-[#510f90] bg-opacity-80 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
			<div className='flex justify-between items-center mb-6'>
				<h2 className='text-xl font-semibold text-gray-100'>Product List</h2>
				<div className='relative'>
					<input
						type='text'
						placeholder='Search products...'
						className='bg-white text-black placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
						onChange={handleSearch}
						value={searchTerm}
					/>
					<Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
				</div>
			</div>

			<div className='overflow-x-auto'>
				<table className='min-w-full divide-y divide-gray-700'>
					<thead>
						<tr>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Name
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Category
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Price
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Stock
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Sales
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Actions
							</th>
						</tr>
					</thead>

					<tbody className='divide-y divide-gray-700'>
						{filteredProducts.map((event) => (
							<motion.tr
								key={event._id}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.3 }}
							>
								<td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center'>
									<img
										src={event.banner}
										alt='Product img'
										className='size-10 rounded-full'
									/>
									{event.title}
								</td>

								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
									{event.category}
								</td>

								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
									Rs.{event.price.toFixed(2)}
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>{event.availableSeats?event.availableSeats:0}</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>{event.sales}</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
									<button className='text-indigo-400 hover:text-indigo-300 mr-2'>
										<Edit size={18} />
									</button>
									<button className='text-red-400 hover:text-red-300'>
										<Trash2 size={18} />
									</button>
								</td>
							</motion.tr>
						))}
					</tbody>
				</table>
			</div>
		</motion.div>
	);
};
export default EventsTable;