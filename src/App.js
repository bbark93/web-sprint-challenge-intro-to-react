import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Character from './components/Character';
import styled from 'styled-components';
// import Details from './components/Details';

const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: space-between;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [data, setData] = useState();

  useEffect(() => {
    axios.get("https://swapi.dev/api/people/")
      .then(res => {
        setData(res.data);
        console.log(res.data);
      })
      .catch(err => console.error(err))
  }, []);

  return (
    <AppDiv>
      {data && <Character char={data}/>}
      {/* {data && <Details details={data[0]}/>} */}
    </AppDiv>
  );
}

export default App;

{/* <div className="App">
  <h1 className="Header">Characters</h1>
</div> */}
