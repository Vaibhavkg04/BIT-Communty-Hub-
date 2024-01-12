import React, { useEffect, useState } from "react";
import "./styling/signup.css";
import "./team.css";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
let u;
function Login() {
	useEffect(() => {
		localStorage.getItem("Pname");
	});
	const navigate = useNavigate();
	const [username, setUser] = useState("");
	const [password, setPass] = useState("");

	const handleLogin = () => {
		const url = "http://localhost:3000/login";
		const data = { username, password };
		alert(username);
		localStorage.setItem("Pname", username);

		axios
			.post(url, data)
			.then((res) => {
				console.log(res.data);
				if (res.data.message) {
					alert(res.data.message);
					u = username;
					navigate("/UserProfile");
				}
			})
			.catch((err) => {
				console.error(err);
				alert("Server error occurred");
			});
	};

	return (
		<div className="signup2">
			<br />
			<br />
			<br />
			<br />
			<br />
			<div className="signup text-center">
				<h1 className="text-5xl  mb-8 ">Log-In</h1>
				<hr className="mb-8" />
				<input
					className="mb-3 text-black"
					type="text"
					placeholder="UserName"
					value={username}
					onChange={(e) => setUser(e.target.value)}
					required
				/>
				<br />
				<input
					className="mb-3 text-black"
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPass(e.target.value)}
				/>
				<br />
				<br />
				<button
					onClick={handleLogin}
					className=" text-lg bg-blue-800 hover:bg-blue-500 text-white font-bold py-2 px-4  rounded "
				>
					Login
				</button>
			</div>
			<br />
			<br />
			<br />
			<br />
			<br /> <br />
			<br />
			<br />
			<div className="teambody">
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
				/>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap"
				/>

				<div className="team-section">
					<div className="team-member">
						<div className="text-2xl font-bold">Contact Creator</div>
						<img className="mb-4 mt-8" alt="Team Member 2" />
						<h3>Vaibhav Kr. Gupta</h3>
						<p className="role">Developer</p>
						<a href="#" className="fa fa-facebook"></a>
						<a href="#" className="fa fa-twitter"></a>
						<a href="#" className="fa fa-linkedin"></a>
					</div>
				</div>
			</div>
		</div>
	);
}
export { u };
export default Login;
