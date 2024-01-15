import React, { useState } from 'react'
import styles from './Game.module.css'

const Game = () => {
  let x = Math.floor((Math.random() * 100) + 1);
  const [num, setNum] = useState(x)
  const [inst, setInst] = useState("You are yet to guess ... ")
  const [guess, setGuess] = useState("")
  const [numOfGuess, setNumOfGuess] = useState(0)

  // console.log(num)
  const correct = ()=>{
    setNumOfGuess(numOfGuess+1)
    if (guess==num) {
      setInst("Correct guess")
    }
    else if (guess>num) {
      setInst("You are guessing high")
    }
    else{
      setInst("You are guessing low")
    }
    setGuess("")
  }
  
  const handleGuess = (event)=>{
    // console.log("changed")
    setGuess(event.target.value)
  }

  const resetGame = () => {
    setNum(x)
    setInst("You are yet to guess ...")
    setNumOfGuess(0)
    setGuess("")
  }

  return (
    <div className={styles.game}>
        <div className={styles.container}>
          <div className={styles.form}>
              <h3 htmlFor="input">Your Guess</h3>
              <input type="number" id='guessNum' value={guess} onChange={handleGuess} />
              <h2 className={styles.instruction}>{inst}</h2>
              <p className={styles.guessnum}>Number of Guesses : <b>{numOfGuess}</b></p>
              <button className={styles.enter} onClick={correct}>Try this Guess</button>
              <button className={styles.reset} onClick={resetGame}>Reset</button>
          </div>
        </div>
    </div>
  )
}

export default Game