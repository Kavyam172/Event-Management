// import React, { useState } from "react";
// import "./Sidebar.css";

// const Sidebar = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   return (
//     <div className="admin-sidebar-container">
//       {/* Hamburger Menu for Mobile */}
//       <button
//         className="admin-sidebar-toggle"
//         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//       >
//         <span className="admin-sidebar-icon">{isSidebarOpen ? "✖" : "☰"}</span>
//       </button>

//       {/* Sidebar */}
//       <div className={`admin-sidebar ${isSidebarOpen ? "open" : ""}`}>
//         <div className="admin-sidebar-logo">Admin Panel</div>
//         <nav className="admin-sidebar-links">
//           <a href="#" className="admin-sidebar-link">
//             Dashboard
//           </a>
//           <a href="#" className="admin-sidebar-link">
//             Users
//           </a>
//           <a href="#" className="admin-sidebar-link">
//             Settings
//           </a>
//           <a href="#" className="admin-sidebar-link">
//             Logout
//           </a>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

import { BarChart2, DollarSign, Menu, Settings, ShoppingBag, ShoppingCart, TrendingUp, Users } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const SIDEBAR_ITEMS = [
	{
		name: "Overview",
		icon: BarChart2,
		color: "#6366f1",
		href: "/admin",
	},
	{ name: "Events", icon: ShoppingBag, color: "#8B5CF6", href: "/admin/events" },
	{ name: "Users", icon: Users, color: "#EC4899", href: "/admin/users" },
	{ name: "Sales", icon: DollarSign, color: "#10B981", href: "/admin/sales" },
	{ name: "Bookings", icon: ShoppingCart, color: "#F59E0B", href: "/admin/bookings" },
	// { name: "Analytics", icon: TrendingUp, color: "#3B82F6", href: "/admin/analytics" },
	// { name: "Settings", icon: Settings, color: "#6EE7B7", href: "/admin/settings" },
];

const Sidebar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	return (
		<motion.div
			className={`fixed z-20 transition-all duration-100 ease-in-out flex-shrink-0 ${
				isSidebarOpen ? "w-64" : "w-20"
			}`}
			animate={{ width: isSidebarOpen ? 256 : 80 }}
			onMouseOver={() => setIsSidebarOpen(true)}
			onMouseLeave={() => setIsSidebarOpen(false)}
		>
			<div className='h-screen bg-[#510f90] bg-opacity-100 backdrop-blur-md p-4 flex flex-col'>
				<motion.button
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					className='text-white p-2 rounded-full hover:bg-[#7b11de] transition-colors max-w-fit'
				>
					<Menu size={28} />
				</motion.button>

				<nav className='mt-8 flex-grow text-white'>
					{SIDEBAR_ITEMS.map((item) => (
						<Link key={item.href} to={item.href}>
							<motion.div className='flex items-center p-4 text-sm font-medium rounded-lg hover:bg-[#7b11de] transition-colors mb-2'>
								<item.icon size={20} style={{ color: item.color, minWidth: "20px" }} />
								<AnimatePresence>
									{isSidebarOpen && (
										<motion.span
											className='ml-4 whitespace-nowrap'
											initial={{ opacity: 0, width: 0 }}
											animate={{ opacity: 1, width: "auto" }}
											exit={{ opacity: 0, width: 0 }}
											transition={{ duration: 0.2, delay: 0.3 }}
										>
											{item.name}
										</motion.span>
									)}
								</AnimatePresence>
							</motion.div>
						</Link>
					))}
				</nav>
			</div>
		</motion.div>
	);
};
export default Sidebar;
