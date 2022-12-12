import React, { useContext, useState } from 'react';
import { Alert } from 'antd';
import './Alert.scss';
import comprensionContext from '../../context/auth/comprensionContext';

const Alerta = () => {
	//Obtener el State del Context
	const stateComprension = useContext(comprensionContext);
	const {alerta, mensajeErrorForm} = stateComprension;

	return (
		<div>
			{alerta ? (
				<Alert message={mensajeErrorForm.msg} type={mensajeErrorForm.cssload} />
			) : null}
		</div>
	);
};

export default Alerta;