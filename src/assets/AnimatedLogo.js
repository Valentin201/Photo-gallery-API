import React from 'react';
import ReactVivus from 'react-vivus';
import svg from './Animated.svg';
import '../App.css';


const LogoVal = (props) => (

	<div className='anim'>
	 <ReactVivus
    id="foo"
    option={{
      file: svg,
      animTimingFunction: 'EASE',
      type: 'delayed',
      duration: 400
    }}
    style={{ height: '100%', width: '100%' }}
  />
	</div>


)

export default LogoVal;