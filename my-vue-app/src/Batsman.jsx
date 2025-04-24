import { useState } from "react"

export default function Batsman(){

    const [runs, setRuns] = useState(0);
    const [sixes, setSixes] = useState(0);
    const [four, setFours] = useState(0);
    const [singles, setSingles] = useState(0);
          
    const handleSingle = () =>{
        const updatedRuns = runs + 1;
        const updateSingles = singles + 1;
        setSingles(updateSingles);
        setRuns(updatedRuns);
    }

    const handleSix = () => {
        const updatedRuns = runs + 6;
        const updateSixes = sixes + 1;
        setSixes(updateSixes);
        setRuns(updatedRuns);
    }

    const handleFour = () => {
        const updatedRuns = runs + 4;
        const updateFour = four + 1;
        setFours(updateFour);
        setRuns(updatedRuns);
    }

    return(
        <div>
            <h3>Player:Bangla Batsman</h3>
            <div>
                <p><small>Six: {sixes}</small></p>
                <p><small>Four: {four}</small></p>
                <p><small>Singles: {singles}</small></p>
            </div>
            {
                runs > 50 && <p>You score: 50</p>
                 
            }
        {
            runs > 100 && <p>You score: 100</p>
        }

        {
            
        }
            
            <h2>Score: {runs}</h2>
            <button onClick = {handleSingle}>Singles</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}