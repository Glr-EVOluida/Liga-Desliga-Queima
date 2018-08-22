import React from 'react';

const Botao = ({estado, onClick , boolean})=>(
<button id={'botao'} disabled={boolean} onClick={onClick}>{estado}</button>
)

export default Botao