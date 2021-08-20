import { useContext } from 'preact/hooks';
import { useQuery } from 'preact-fetching';
import AuthContext from '../context/auth-context';

interface UserInfo {
	id: string;
	email: string;
	picture: string;
}

const USER_INFO_ENDPOINT = 'https://www.googleapis.com/oauth2/v1/userinfo';

function useUserInfo() {
	const { token } = useContext(AuthContext);

	return useQuery<UserInfo>(`useUserInfo/${token}`, async () => {
		if (!token) {
			return;
		}

		const response = await fetch(USER_INFO_ENDPOINT, {
			headers: { Authorization: `Bearer ${token}` },
		});

		return response.json();
	});
}

export default useUserInfo;
