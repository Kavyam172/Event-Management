import Header from "../Header/Header";

import OverviewCards from "./OverviewCards/OverviewCards";
import RevenueChart from "./RevenueChart/RevenueChart";
import ChannelPerformance from "./ChannelPerformance/ChannelPerformance";
import ProductPerformance from "./ProductPerformance/ProductPerformance";
import UserRetention from "./UserRetention/UserRetention";
import CustomerSegmentation from "./CustomerSegmentation/CustomerSegmentation";
import AIPoweredInsights from "./Insights/Insights";

const AnalyticsPage = () => {
	return (
		<div className='ml-20 flex-1 overflow-auto relative z-10 '>
			<Header title={"Analytics Dashboard"} />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				<OverviewCards />
				<RevenueChart />

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
					<ChannelPerformance />
					<ProductPerformance />
					<UserRetention />
					<CustomerSegmentation />
				</div>

				<AIPoweredInsights />
			</main>
		</div>
	);
};
export default AnalyticsPage;