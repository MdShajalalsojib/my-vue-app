import { useState } from "react"

export default function Bowler(){

    const [bows, setBow] = useState(0);
    const [dotBall, setDotBall] = useState(0);

    const handleBow = () =>{
        const updateBow = bows + 1;
        setBow(updateBow);

    }
    const handleDotBall = () =>{
        const updateDotball = dotBall +1;
        setDotBall(updateDotball);
    }
    
    return(

          <>
             
            
             {
                 bows > 5 && <p>Complete Uber</p>
             }
            
           
        <div>
            <h3>Bowler: {bows} </h3>
            <h3>Dotball: {dotBall}</h3>
            <button onClick={handleBow}>BowNumber</button>
            <button onClick={handleDotBall}>DotBall</button>
             
        </div>
          </>
    )
}