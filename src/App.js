
import Home from "./components/home/Home";
import Layout from "./components/layout";
import React from 'react'
import { Route , Routes } from "react-router-dom";
import Author from "./components/home/Author";
import Detailblog from "./components/home/Detailblog";
import ScrollToTop from "react-scroll-to-top";
import ScrollTop from "./components/shared/ScrollTop";

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Layout>
        <ScrollTop />
        <Routes>
          <Route path="/blogs/:slug" element={<Detailblog />} />
          <Route path="/authors/:slug" element={<Author />} />
          <Route path="/" element={<Home />}/>
        </Routes>
      </Layout>
    </div>
  )
}

export default App
