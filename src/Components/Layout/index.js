import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

export default function Layout() {
	return (
		<div className="bg-[url('/src/Assets/side-wave_background.svg')]">
			<>
				<Header />
				<Outlet />
				<Footer />
			</>
		</div>
	);
}
