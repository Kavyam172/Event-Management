import Header from "../Header/Header";
import ConnectedAccounts from "./ConnectedAccounts/ConnectedAccounts";
import DangerZone from "./DangerZone/DangerZone";
import Notifications from "./Notifications/Notifications";
import Profile from "./Profile/Profile";
import Security from "./Security/Security";

const SettingsPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10 '>
			<Header title='Settings' />
			<main className='max-w-4xl mx-auto py-6 px-4 lg:px-8'>
				<Profile />
				<Notifications />
				<Security />
				<ConnectedAccounts />
				<DangerZone />
			</main>
		</div>
	);
};
export default SettingsPage;