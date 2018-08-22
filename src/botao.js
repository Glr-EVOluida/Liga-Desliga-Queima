import React from 'react';

const Botao = ({estado, onClick , boolean})=>(
<button disabled={boolean} onClick={onClick}>{estado}</button>
)

export default Botao