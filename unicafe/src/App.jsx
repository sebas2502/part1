import { useState } from 'react'

const Button = ({text , onClick}) => {
  return(
    <button onClick = {onClick}> {text} </button>
  )
}

const StatisticsLine = ({text , value}) => {
  return (
  
  <tr>
  <td><p> {text} </p></td>
  <td><p> {value} </p></td>
  </tr>
    
)
}

const Statistics = ({comments , finish}) => {
  
    if (finish == true){
      return ( 
      
      
      <table>
        <tbody>
          
          <StatisticsLine text = "Good"  value = {comments.amountGood} />
          <StatisticsLine text = "Neutral"  value = {comments.amountNeutral} />
          <StatisticsLine text = "Bad"  value = {comments.amountBad} />
          <StatisticsLine text = "All"  value = {comments.total} />
          <StatisticsLine text = "Average"  value = {((comments.amountGood + (comments.amountBad * -1)) / comments.total).toFixed(1) || 0} />
          <StatisticsLine text = "Positive"  value = {(((comments.amountGood * 100) / comments.total).toFixed(1) || 0).toString()+'%'}  />
          
        </tbody>
      </table>

   
    
    
    )
    }else{
      return <p>No feedback given</p>
    }
   
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [finish , setFinish] = useState(false)
  
  
  

  const funcGood = () => {
    setGood(good + 1);
  }

  const funcNeutral = () => {
    setNeutral(neutral + 1);
  }

  const funcBad = () => {
    setBad(bad + 1);
  }

  const funcFinish = () => {
    setFinish(true)
  }


  const comments = {
 
    amountGood : good,
    amountNeutral : neutral,
    amountBad : bad,
    total : good + neutral + bad,
  
}





  return (
    <div>
        <h1>Give Feedback</h1>
        <Button text = "Good" onClick = {funcGood} />    
        <Button text = "Neutral" onClick = {funcNeutral} />    
        <Button text = "Bad" onClick = {funcBad} />
        <Button text = "Finalizar" onClick={funcFinish} />  
        <h2>Statistics</h2>
        <Statistics comments = {comments} finish = {finish} />
       
    </div>
  )
}

export default App