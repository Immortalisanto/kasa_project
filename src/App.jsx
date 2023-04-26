import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import React from 'react'
import Home from './pages/Home/index'
import APropos from './pages/APropos/index'
import Error from './pages/Error/index'
import Footer from './components/Footer/index'

function App() {
    return (
        <React.Fragment>
            <Header />
            <Routes>
                <Route
                    path="/home"
                    element={<Home />}>
                    <Route path="/home/:logement" />
                </Route>
                <Route
                    path="/a-propos"
                    element={<APropos />}
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
