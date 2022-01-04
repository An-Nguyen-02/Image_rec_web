import React from 'react';
import './Image.css'

const Image = ({imgURL, boxes}) => {
	return(
	    <div className='center ma'>
	      <div className='absolute mt2'>
	        <img id='inputimage' alt='' src={imgURL} width='500px' heigh='auto'/>
	        {boxes.map(box=>
	        		<div key = {`box${box.topRow}${box.leftCol}`} 
	        			 className='bounding-box' 
	        			 style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}>	        			
	        		</div>
	        	)

	        }
	      </div>
	    </div>
	)
}

export default Image;