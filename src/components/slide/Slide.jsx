import React from "react";
import Sdata from "./Sdata";
import "./slide.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";

const Slide = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<>
			<div className='slide'>
				<Slider {...settings}>
					{Sdata.map((value) => {
						return (
							<div
								className='box'
								key={value.id}>
								<div className='img'>
									<img
										src={value.cover}
										alt=''
									/>
								</div>
								<div className='text'>
									<h2>{value.title}</h2>
									<p>{value.desc}</p>
									<NavLink to='/'>
										<button className='btn btn2'>Read More</button>
									</NavLink>
								</div>
							</div>
						);
					})}
				</Slider>
			</div>
		</>
	);
};
export default Slide;
