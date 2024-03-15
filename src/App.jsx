
import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Recipe from './components/Recipe/Recipe'

function App() {
  const [recipes , setRecipes] = useState([]);

  useEffect(()=>{
    fetch('./recipe.json')
    .then(res=>res.json())
    .then(data=> setRecipes(data))
  },[])


  return (
    <>
      <header className='max-w-[1320px] mx-auto'>
        <Header></Header>
      </header>
      <main className='max-w-[1320px] mx-auto'>
        <Recipe recipes={recipes}></Recipe>
      </main>

    </>
  )
}

export default App
