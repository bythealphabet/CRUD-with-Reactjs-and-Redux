import React from 'react'
import styles from './NavItem.module.css'
import {Link} from 'react-router-dom'



const navItem =(props)=>{
	return(
		<Link className= {`navbar-item ${styles.Item} `} to={props.path}>
		 {props.children}
		</Link>
	)
}


export default navItem