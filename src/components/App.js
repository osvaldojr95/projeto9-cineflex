import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./Header"
import Home from "./Home"
import Movie from "./Movie"
import Section from "./Section"
import Success from "./Success"

export default function App() {
    return (
        <>
            <Header />
            <main>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/filme/:idMovie" element={<Movie />} />
                        <Route path="/sessao/:idSection" element={<Section />} />
                        <Route path="/sucesso" element={<Success />} />
                    </Routes>
                </BrowserRouter>
            </main>
        </>
    )
}