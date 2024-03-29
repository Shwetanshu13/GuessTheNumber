import React, {useState} from 'react'
import styles from './HardGame.module.css'

const HardGame = () => {
    let x = Math.floor((Math.random() * 100) + 1);

    const [live, setLive] = useState(false)
    const [num, setNum] = useState(x)
    const [inst, setInst] = useState("You are yet to guess ... ")
    const [guess, setGuess] = useState(null)
    const [prevGuess, setPrevGuess] = useState(num)
    const [numOfGuess, setNumOfGuess] = useState(0)
    const [correctGuess, setCorrectGuess] = useState("")

    // console.log(num)
    const correct = ()=>{
        setNumOfGuess(numOfGuess+1)
        if (guess==num) {
        setInst("Correct guess ");
        setCorrectGuess(`The number was ${guess}`)
        setLive(true)
        }
        else if (Math.abs(prevGuess-num)>Math.abs(guess-num)) {
        setInst("HOTTER")
        }
        else{
        setInst("HOT")
        }
        setGuess("")
        setPrevGuess(guess)
    }
    
    const handleGuess = (event)=>{
        setGuess(event.target.value)
    }

    const resetGame = () => {
        setNum(x)
        setInst("You are yet to guess ...")
        setNumOfGuess(0)
        setGuess("")
        setLive(false)
        setCorrectGuess("")
    }
    return (
        <div className={styles.game}>
            <div className={styles.container}>
                <div className={styles.form}>
                    <form onSubmit={(e)=>{e.preventDefault()}}>
                        <h1>Hard Mode</h1>
                        <h3 htmlFor="input">Your Guess</h3>
                        <input type="number" id='guessNum' value={guess} onChange={handleGuess} />
                        <h2 className={styles.instruction}>{inst}</h2>
                        <h2 className={styles.instruction}>{correctGuess}</h2>
                        <p className={styles.guessnum}>Number of Guesses : <b>{numOfGuess}</b></p>
                        <button className={styles.enter} onClick={correct} disabled={live} >Try this Guess</button>
                        <button className={styles.reset} onClick={resetGame}>Reset</button>
                        <p className={styles.note}>
                            If you are closer to the number than your previuos guess, the hint will change to HOTTER. Else it will change to HOT.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default HardGame