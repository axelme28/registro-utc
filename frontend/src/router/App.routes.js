import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthRoutes } from './client_routes/Auth.routes';
import { DocRoutes } from './client_routes/Doc.routes';
import { AdminRoutes } from './admin_routes/AdminAuth.routes';
import { AdminRoutesUser } from './admin_routes/Admin.routes';

export const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/auth/*' element={<AuthRoutes />}></Route>
				<Route path='/docente/*' element={<DocRoutes />}></Route>
				<Route path='/auth-admin/*' element={<AdminRoutes />}></Route>
				<Route path='/cms/*' element={<AdminRoutesUser />}></Route>
				<Route path='*' element={<AuthRoutes />}></Route>
			</Routes>
		</BrowserRouter>
	);
};
