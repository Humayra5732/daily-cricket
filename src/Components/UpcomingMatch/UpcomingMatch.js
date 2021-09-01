import React from 'react';


const UpcomingMatch = (props) => {
    console.log(props);
    // destructuring for code minimize 
    const {name,logo_url} = props.matchInfo.teama;
    const {location , timezone} = props.matchInfo.venue;
    // CSS style starts here 
    const flagStyle = {height:'60px' ,borderRadius:'50%' } 
    const upcomingMatchStyle = {
    borderBottom:'1px solid grey', 
    margin:'35px',padding:'5px',
    color:'rgb(71, 71, 71)',
    fontFamily: 'AustinNewstextRoman, Georgia, Times, serif',
    font:'Georgia'
}
    const circleStyle ={
     height:'55px',
    width:'55px',
    borderRadius: '50%',
    backgroundColor:'rgb(71, 71, 71)',
    zIndex:-'2',
    position: 'absolute'
    }
    const rectangleStyle ={
        height:'36px',
        width:'100px',
        backgroundColor:'rgb(71, 71, 71)',
        borderRadius: '10%',
        zIndex:'-1',
        position: 'absolute',
        marginTop:'10px',
        marginLeft: '5px',
        fontWeight:'bold',
        color: 'white',
        textAlign:'enter',
        fontSize: '10px'
    }
    // CSS style ends here 
    return (
        <div style={upcomingMatchStyle}>
            <div style ={{marginTop:'50px'}}>
            <div style={circleStyle}></div>
            <div style={rectangleStyle}>
            <p>UPCOMING</p>
            </div>
            </div>
            <p style={{marginRight:'920px',marginTop:'67px',fontSize: '10px'}}>MATCH</p>
            <p>{props.matchInfo.venue.name}, {location}</p>
            <p>{props.matchInfo.competition.datestart} , {timezone} Local time</p>
            <h4>{name} <img style={flagStyle} src={logo_url}  className ="flag" alt="country flag" /> <span style={{fontSize:'35px'}}>vs</span> <img style={flagStyle} src={props.matchInfo.teamb.logo_url} alt="country flag" /> {props.matchInfo.teamb.name} </h4>
             
        </div>
    );
};

export default UpcomingMatch;