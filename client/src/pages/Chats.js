import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import Login from './Login';
import ChatFeed from '../components/Chat Components/ChatFeed';

const projectID = 'c324e0ea-5ec2-4823-a4d1-46eea70540a8';

const Chats = () => {
	if (!localStorage.getItem('username')) return <Login />;

	return (
		<ChatEngine
			height='100vh'
			projectID={projectID}
			username={localStorage.getItem('username')}
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
