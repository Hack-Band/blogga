import React from 'react';
import HeroSection from '../src/components/HeroSection'
import Articles from './components/Articles';
import BlogPost from './components/BlogPost';
import Subscribe from './components/Subscribe';
import './index.css'

function App() {
  return (
    <main>
      <HeroSection />
      <Articles>
        <BlogPost />
        <BlogPost />
        <BlogPost />
      </Articles>
      
      <Subscribe />
    </main>
  );
}

export default App;
