import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import React from 'react'
import Home from './pages/Home/Home'
import APropos from './pages/APropos/APropos'
import Error from './pages/Error/Error'
import Footer from './components/Footer/Footer'
import Hosting from './pages/Hosting/Hosting'

function App() {
    return (
        <React.Fragment>
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/a-propos"
                    element={<APropos />}
                />
                <Route
                    path="/:title/:id"
                    element={<Hosting />}
                />
                <Route
                    path="*"
                    element={<Error />}
                />
            </Routes>
            <Footer />
        </React.Fragment>
    )
}

export default App
