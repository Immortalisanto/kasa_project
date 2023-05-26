import { Route, Routes } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home/Home'
import APropos from './pages/APropos/APropos'
import Error from './pages/Error/Error'
import Hosting from './pages/Hosting/Hosting'

function App() {
    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}

export default App
