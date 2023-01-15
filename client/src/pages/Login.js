import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const projectID = 'c324e0ea-5ec2-4823-a4d1-46eea70540a8';

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		const authObject = {
			'Project-ID': projectID,
			'User-Name': username,
			'User-Secret': password,
		};

		try {
			await axios.get('https://api.chatengine.io/chats', {
				headers: authObject,
			});

			localStorage.setItem('username', username);
			localStorage.setItem('password', password);

			window.location.reload();
			setError('');
		} catch (err) {
			setError('Oops, incorrect credentials.');
		}
	};

	// Create a user when they sign up for site
	// May need to move to Sign Up page if we go that route
	const createUser = async (props) => {
		const { username, password, email, firstName, lastName } = props;

		let data = `{
      "username": ${username},
      "secret": ${password},
      "email": ${email},
      "first_name": ${firstName},
      "last_name": ${lastName}'
    }`;

		const config = {
			method: 'post',
			url: 'https://api.chatengine.io/users',
			headers: {
				'PRIVATE-KEY': '{{private_key}}', //need to make .env variable
			},
			data: data,
		};

		try {
			await axios(config).then(function (response) {
				console.log(JSON.stringify(response.data));
			});
		} catch (err) {
			console.error(err);
		}
	};

	return <div>Login Page</div>;
};

export default Login;
