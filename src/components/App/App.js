import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import ArticleContainer from '../ArticleContainer/ArticleContainer';
import Navigation from '../Navigation/Navigation';
import './App.css';

function App() {
  const [data, setData] = useState(null)

  const getPopular = (arg) => {
    const key = 'RTUJ4VZBfLv4GhnIUf2Poxs7oWhYKT7Q'
      fetch(`https://api.nytimes.com/svc/mostpopular/v2/${arg}?api-key=${key}`)
        .then(res => res.json())
        .then(data => setData(data.results))
  }

  useEffect(() => {
    getPopular('shared/1/facebook.json') // Popular facebook post
  }, [])

  return (
    <>
    <Header />
    <Navigation />
    {data ? <ArticleContainer data={data} /> : <h1>LOADING</h1>}
    </>
  );
}

export default App;