import Card from "./Card";
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
								src='src/images/woman-1.jpg'
								alt=''
							/>
						</div>
						<div className='text'>
							<h1>You Can Change The World</h1>
							<p>Women Are Redirect The Future</p>
							<span>by Jame Lannister</span>
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
