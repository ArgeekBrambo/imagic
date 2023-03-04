import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { logo } from "./assets";
import { Home, CreatePost } from "./pages";
import { imagic } from "./assets";

const App = () => {
    return (
        <BrowserRouter>
            <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
                <Link to={"/"}>
                    <img
                        src={logo}
                        alt="logo"
                        className="w-28 object-contain"
                    />
                </Link>

                <Link to={'/'} className="flex gap-2 items-center">
                    <img src={imagic} alt="imagic logo" 
                        className="w-14 h-14 object-contain"
                    />
                    <h1
                        className="text-4xl font-bold text-gray-900"
                    >
                        imagic
                    </h1>
                </Link>

                <Link
                    to={"/create-post"}
                    className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
                >
                    Create
                </Link>
            </header>
            <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/create-post"} element={<CreatePost />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
};

export default App;