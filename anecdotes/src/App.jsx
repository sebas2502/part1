import { useState } from 'react'

const Anecdote = ({anecdote}) => {
  return <p>{anecdote}</p>
}

const WinAnecdote = ({anecdote}) => {
    if(anecdote.winAnecdote !== ''){
      return(
        <>
        <p>Win Anecdote : {anecdote.descriptionAnecdote} </p>
        <p>Amount : {anecdote.maxVotes}</p>
        </>
      )
    }else{
      <p></p>
    }
}



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const votesInit = [0,0,0,0,0,0,0,0]

  const [selected, setSelected] = useState(0)
  const [votes , setVotes] = useState(votesInit)
  const [winAnecdote , setWin] = useState({})
  

  const copy = [...votes]

  const nextAnecdote = ({anecdotes}) => {
    let randomNumber = Math.floor(Math.random() * 8);
    setSelected(randomNumber);
  }

  const voteAnecdote = ()=>{
    copy[selected] += 1
    console.log(copy)
    setVotes(copy)
  }

 const finishVotes = () => {
     let maxVotes = Math.max(...copy)
     let indexMaxVotes = copy.indexOf(maxVotes)
     setWin({
        maxVotes : maxVotes,
        descriptionAnecdote : anecdotes[indexMaxVotes]
     }) 
 }

  return (
    <div>  
      <Anecdote anecdote = {anecdotes[selected]} /> 
      <button onClick = {voteAnecdote}> Vote </button>
      <button onClick = {nextAnecdote}> Next Anecdote </button>
      <button onClick = {finishVotes}> Finish </button>
      <WinAnecdote anecdote = {winAnecdote} />
      
    </div>
  )
}

export default App