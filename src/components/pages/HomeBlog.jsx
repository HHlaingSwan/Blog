import { NavLink } from "react-router-dom";
import Card from "../blog/Card";
import Footer from "../footer/Footer";
import Slider from "../slide/Slide";

const HomeBlog = () => {
	return (
		<>
			<div className='home'>
				<div className='left-content'>
					<div className='content'>
						<div className='logo'>
							<h1>M</h1>
						</div>
						<div className='home-img'>
							<img
								src='https://cdn.pixabay.com/photo/2021/07/15/11/15/woman-6468147_1280.jpg'
								alt=''
							/>
						</div>
						<div className='text'>
							<h1>You Can Change The World</h1>
							<p>Women Are Redirect The Future</p>
							<NavLink to='/page-one'>
								<button className='btn'>Read More</button>
							</NavLink>
						</div>
						<div className='text text2'>
							<h1>Strong Style</h1>
							<p>New Ways To Wear Your Style</p>
							<span>How To Shop Comfortable</span>
						</div>
					</div>
				</div>
				<div className='right-content'>
					<Slider />
					<Card />
					<Footer />
				</div>
			</div>
		</>
	);
};

export default HomeBlog;
