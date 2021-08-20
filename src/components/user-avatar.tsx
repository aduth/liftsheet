import useUserInfo from '../hooks/use-user-info';

function UserAvatar() {
	const { data } = useUserInfo();

	return data ? (
		<img
			src={data.picture}
			alt="User profile picture"
			width="42"
			height="42"
			className="user-avatar"
		/>
	) : null;
}

export default UserAvatar;
