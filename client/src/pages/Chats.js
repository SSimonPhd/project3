import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from '../components/Chat Components/ChatFeed';
import env from 'react-dotenv';
import Auth from '../utils/auth';
import { useNavigate } from 'react-router-dom';

const projectID = env.REACT_APP_CE_PUBLIC_KEY;

const Chats = () => {
	let navigate = useNavigate();

	if (!Auth.loggedIn()) navigate('/login');
	// if (!localStorage.getItem('username')) return <Login />;

	return (
		<ChatEngine
			height='80vh'
			projectID={projectID}
			userName={localStorage.getItem('username')}
			userSecret={localStorage.getItem('password')}
			renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
			onNewMessage={() =>
				new Audio(
					'https://chat-engine-assets.s3.amazonaws.com/click.mp3'
				).play()
			}
		/>
	);
};

export default Chats;
