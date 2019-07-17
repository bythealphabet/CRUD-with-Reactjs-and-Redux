import React from 'react'


const Input =({input, label, meta})=>{
	return(
		<div className="field">
				<label className="label">{label}</label>
				<div className="control">
					<input
						className="input"
						{...input}
						autoComplete={'off'}
					/>
				</div>
				{meta.touched ? <p className="help is-danger">{meta.error}</p> : null}
			</div>
	)
}


export default Input