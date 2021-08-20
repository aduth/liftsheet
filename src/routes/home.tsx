import { useContext } from 'preact/hooks';
import Page from '../components/page';
import LoggedOutIntro from '../components/logged-out-intro';
import RecentActivities from '../components/recent-activities';
import AuthContext from '../context/auth-context';

function Home() {
	const { isLoggedIn } = useContext(AuthContext);

	return <Page name="home">{isLoggedIn ? <RecentActivities /> : <LoggedOutIntro />}</Page>;
}

export default Home;
