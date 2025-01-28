import { useEffect, useState } from "react"

const Card = ({ title }) => {
  const [count, setCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  // State is not persistent, it resets when the browser is refreshed
  
  // UseEffect runs twice in Strict Mode, in prod it fixes this or you can remove the Strict Mode from main.jsx
  // useEffect(() => {
  //   console.log(`${title} has been liked: ${hasLiked}`)
  // }) 
  // This useEffect keeps on firing even when the button has not been clicked and the card has been clicked which is not what we want, so we set a dependency array.

  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}`)
  }, [hasLiked]) 

  // This type of empty dependency useEffect runs only once when the component is mounted
  useEffect(() => {
    console.log('Card Rendered')
  }, [])

  return (
    <div className="card" onClick={() => setCount(count+1)}>
      <h3>{title} <br /> {count || null}</h3>
      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? '❤️' : '🤍'}
      </button>
    </div>
  )
}

const App = () => {

  return (
    <div className="card-container">
      <Card title="Star Wars" rating={5} isCool={true} />
      <Card title="Avatar"/>
      <Card title="The Godfather"/>
    </div>
  )
}

export default App;