import React from "react";
import "./pages.css";
import { NavLink } from "react-router-dom";

const PageOne = () => {
	return (
		<div className='container'>
			<div className='container-left'>
				<div className='title'>
					<h4 className='b-1'>B</h4>
					<h4 className='b-2'>BR</h4>
					<h4 className='b-3'>BRA</h4>
					<h4 className='b-4'>BRAV</h4>
					<h4 className='b-5'>BRAVE</h4>
					<h4 className='b-6'>71</h4>
					<div className='text'>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem
							ipsum dolor sit, amet consectetur adipisicing elit. Dolore, quis.
						</p>
					</div>
				</div>
				<div className='image'>
					<img
						src='https://cdn.pixabay.com/photo/2019/05/16/16/50/man-4207514_1280.jpg'
						alt=''
					/>
				</div>
			</div>
			<div className='container-right'>
				<div className='content-1'>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id sequi
						ratione facere commodi itaque provident? Fuga sequi possimus, minus,
						fugiat est sit officiis dolor culpa alias natus odit tempore Lorem
						ipsum dolor sit amet consectetur adipisicing elit. Animi quis ullam,
						nihil harum porro pariatur!
					</p>
					<h1>It Makes Me Feel Good Just To Know That I'm Not The Only One</h1>
				</div>
				<div className='content-2'>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id sequi
						ratione facere commodi itaque provident? Fuga sequi possimus, minus,
						fugiat est sit officiis dolor culpa alias natus odit tempore Lorem
						ipsum dolor sit amet consectetur adipisicing elit. Animi quis ullam,
						nihil harum porro pariatur! Repellat quaerat sequi obcaecati dolores
						eum blanditiis eius ea unde sed nemo accusantium cupiditate eos
						doloribus excepturi beatae, error, porro fugiat, labore sapiente ex
						autem. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Obcaecati, distinctio?
					</p>
				</div>
			</div>
		</div>
	);
};

export default PageOne;
