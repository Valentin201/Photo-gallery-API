import React from 'react';
import '../App.css';



const image = (props) => (

        <li className="img-wrap">
        <div className="hovereffect">
        <img className="img-responsive" src={props.url}  alt=""/>
            <div className="overlay">
                <h2>Photo by</h2>
				<p>
			{props.name}
			<a>{props.bio}</a>
            <a rel="noopener noreferrer" target="_blank"  href={props.download} >Click to see fullscreen</a>
		</p>
            </div>

    </div>
    </li>



)

export default image;
