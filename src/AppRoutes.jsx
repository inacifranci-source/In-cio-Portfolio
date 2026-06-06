import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/Home"

const AppRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                    </Routes>
                </Layout>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes;