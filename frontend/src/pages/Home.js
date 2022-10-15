// import { Link, Routes, Route } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import Articles from "../components/Articles";
import BlogPost from "../components/BlogPost";
import Subscribe from "../components/Subscribe";

function Home() {
  return (
    <>
      <HeroSection />
      <Articles>
        <BlogPost />
        <BlogPost />
        <BlogPost />
      </Articles>
      <Subscribe />
    </>
  );
}

export { Home };
