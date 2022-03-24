import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./Header"
import Home from "./Home"

export default function App() {
    return (
        <>
            <Header />
            <main>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </BrowserRouter>
            </main>
        </>
    )
}