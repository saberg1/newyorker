import { useEffect, useState } from 'react';
import { getPopular } from '../../apiCalls';
import './App.css';

function App() {
  const [data, setData] = useState([])

  const getData = async () => {
    let popFace = await getPopular('shared/1/facebook.json')
    // faceBook(popFace)
  }
  
  // const faceBook = (pop) => setData([...data, pop]);

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
    <h1>NEW YORK TIMES</h1>
    </>
  );
}

export default App;
