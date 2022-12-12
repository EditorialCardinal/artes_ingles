import React, { useContext, useEffect } from 'react';
import { LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import comprensionContext from '../../../context/auth/comprensionContext';
import {useNavigate} from 'react-router-dom';

import './Header.scss';

const Header = () => {
	
	const usuario = JSON.parse(sessionStorage.getItem('cliente'));
	const stateComprension = useContext(comprensionContext);
	const {cambioIconMenu, iconMenu, cerrarSesion, usuarioAutenticado} = stateComprension;
	let navigate = useNavigate();

	const token = localStorage.getItem('token');	

	const cerrar = () => {
		cerrarSesion();
		navigate('/');		
	}

	/*
	useEffect(() => {
		if(token === null){
			navigate('/');
			return
		}
		usuarioAutenticado()
	}, [iconMenu]);
	*/
	
	return (
		<div className='menu-superior'>
			<div className='btn_item'>
				<Button onClick={() => cambioIconMenu(!iconMenu)}>
					{
						(iconMenu) ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
					}						
				</Button>
				{
					(usuario) ? <p>{usuario.texto}</p> : null
				}           
			</div>
			<p className='text-libro' onClick={() => cerrar()}><LogoutOutlined className='btnCerrar' /> Cerrar Sesión</p>
		</div>
	)
}

export default Header