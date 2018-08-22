
import React from 'react';

const Title = ({name, lastname}) =>(	
<tr>
	<td>{name}</td>	
	<td>{lastname}</td>				
</tr>
	)
Title.defaultProps ={
	name:'Irineu',
	lastname:'Você não sabe nem eu'
}
export default Title;