import React, { useContext } from 'react';
import Header from '../components/panel/header';
import Aside from '../components/panel/aside/Aside';
import Footer from '../components/panel/footer/Footer';
import {Outlet} from 'react-router-dom';

import "./LayoutBase.scss"

const LayoutBase = () => {
  return (
		<div className='content-layout'>
			<header>
				<Header />
			</header>
			<aside>
				<Aside />
			</aside>
			<main>
				<Outlet /> 
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
  	)
}

export default LayoutBase;