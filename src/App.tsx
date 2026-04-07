import './App.css'
import HomePage from "./pages/HomePage.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {PrimeReactProvider} from "primereact/api";
import Header from "./shared/components/Header.tsx";
import PostsPage from "./pages/PostsPage.tsx";
import UserPage from "./pages/UsersPage.tsx";

function App() {
  return (
    <>
        <BrowserRouter>
            <PrimeReactProvider>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/posts" element={<PostsPage />} />
                    <Route path="/users" element={<UserPage />} />
                </Routes>
            </PrimeReactProvider>

        </BrowserRouter>
    </>
  )
}

export default App
