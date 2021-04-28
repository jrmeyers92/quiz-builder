import React from "react";
import Button from "@material-ui/core/Button";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className='home'>
			<Link to='/buildquiz'>
				<Button variant='contained' color='secondary' size='large'>
					Build a Quiz!
				</Button>
			</Link>
		</div>
	);
};

export default Home;
