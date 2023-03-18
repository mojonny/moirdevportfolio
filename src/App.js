import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home/index';
import LearningLab from './Pages/LearningLab/index';
import NotFound from './Pages/NotFound/index';
import Layout from './Components/Layout/index';

export default function App() {
	return (
		<div className="App">
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<Home />} />
					<Route path="/learninglab" element={<LearningLab />} />
				</Route>

				{/* In case of 404 */}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}
