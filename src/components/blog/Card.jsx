import { NavLink } from "react-router-dom";
import "./Card.css";
import Cdata from "./Cdata";

const Card = () => {
	return (
		<>
			<div className='card grid top'>
				{Cdata.map((value) => {
					return (
						<div
							className='box'
							key={value.id}>
							<div className='img'>
								<img
									src={value.cover}
									alt='Card Images'
								/>
							</div>
							<h2>{value.title}</h2>
							<NavLink to='/page-one'>
								<button className='btn btn2'>Read More</button>
							</NavLink>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Card;
