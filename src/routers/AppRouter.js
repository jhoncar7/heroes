import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { DcScreen } from '../components/dc/DcScreen'
import { LoginScreen } from '../components/login/LoginScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { PassScreen } from '../components/pass/PassScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { Navbar } from '../components/ui/NavBar'
import { DashboardRoutes } from './DashboardRoutes'
import { PrivateRoute } from './PrivateRoute'
import { PublicRouter } from './PublicRouter'

export const AppRouter = () => {
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/login" element={
                    <PublicRouter>
                        <LoginScreen />
                    </PublicRouter>
                } />
                {/* <Route path="/login" element={<LoginScreen />} /> */}
                <Route path='/*' element={
                    <PrivateRoute>
                        <DashboardRoutes />
                    </PrivateRoute>
                } />
                {/* <Route path="/*" element={<DashboardRoutes />} /> */}
            </Routes>
        </BrowserRouter>
    )
}
