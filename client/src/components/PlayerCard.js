import React from 'react';

  const PlayerCard = (props) => {
    let players = props.players == null || undefined ? [] : props.players
    // const Card = styled.div`
    // margin: 50px; 
    // border-radius: 25px 50px; 
    // border: 1px solid black;
    // padding-bottom: 20px;
    // `
    
    // const Cardstyle = styled.div`
    // max-width: 500px;
    // margin: 0 auto;
    // margin-top: 50px; 
    // border-radius: 25px 50px; 
    // border: 1px solid black;
    // padding-bottom: 20px;
    // `
    
    return (
      <div>
          {players.map(player =>{
              return(
                <div key={player.id}>
                  <h2>{player.name}</h2>
                  <h4>{player.country}</h4>
                  <h4>Searched {player.searches} times</h4>
                  
                </div>
            )
          })}

      </div>
    );
  };
  
  export default PlayerCard;