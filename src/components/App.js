import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./Header"

export default function App() {
    return (
        <>
            <Header />
            <main>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<></>} />
                    </Routes>
                </BrowserRouter>
            </main>
        </>
    )
}