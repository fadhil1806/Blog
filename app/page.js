'use client'
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";
import Navbar from "@/components/Navbar";
import Post from "@/components/Post";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
// import { Pagination } from "antd";
export default function Home() {
  return (
    <>
      <Navbar/>
      <div>
        <Carousel />
      </div>
      <Post />
      <Footer/>
    </>
  );
}
