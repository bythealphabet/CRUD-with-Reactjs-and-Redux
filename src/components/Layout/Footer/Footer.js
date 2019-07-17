import React from 'react'
import styles from './Footer.module.css'


const footer =(props)=>{
	return(
		<div className={`section  ${styles.Footer} `}>
			<div className=" footer">
					
				<div className="content">
					<p>BytheAlphabet NV. All rights reserved. BytheAlphabet,</p> 
					<p>BytheAlphabet logo, and bythealphabet.com are trademarks of</p> 
					<p>BytheAlphabet NV.</p>
				</div>
				
			</div>
		</div>
	)
}


export default footer