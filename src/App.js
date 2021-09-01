import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import UpcomingMatch from './Components/UpcomingMatch/UpcomingMatch'




function App() {
        const [upcomingMatches,setUpcomingMatches] = useState([]);

        // loading data from API using useEffect hook    
      useEffect(()=>{
        fetch("https://rest.entitysport.com/v2/matches/?status=2&format=6&token=437214169d9be2a73e91d22f76f68b52&per_page=10&&paged=1")
        .then(res=>res.json())
        .then(data=>{
          setUpcomingMatches(data.response.items);
          const dataDetail = data.response.items;
          // console.log(dataDetail);
          const dataDetails = dataDetail.map(matches=>matches.teama.name);
          // console.log(dataDetails);
          
        })
        .catch(error=>console.log(error));
      },[])

    
  return (
    <div className="App">
      {/* nav bar design starts here  */}
        <nav className="nav-bar">
          <ul>
            <li> <a href="#">Live & Upcoming</a></li>
            <li> <a href="#"  >Result Calendar</a></li>
            <li> <a href="#">International </a></li>
            <li> <a href="#">Select country</a></li>
          </ul>
        </nav> <br />
         {/* nav bar design ends here   */}
     
     {
       upcomingMatches.map(matches=> 
       
       <UpcomingMatch matchInfo ={matches} ></UpcomingMatch>)
       
     }
     {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>  */}
    </div>
  );
}

export default App;
