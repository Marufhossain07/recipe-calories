import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Recipe from './components/Recipe/Recipe'
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [recipes, setRecipes] = useState([]);
  const [cooks, setCooks] = useState([])
  const [cooking, setCooking] = useState([]);
  const [time,setTime] = useState(0)
  const [calories,setCalories] = useState(0)
  const notify = () => toast("Item already added");

  useEffect(() => {
    fetch('./recipe.json')
      .then(res => res.json())
      .then(data => setRecipes(data))
  }, []);

  const handleAddToCook = (recipe) => {
    const isExist = cooks.find(cook => cook.id == recipe.id)
    if (!isExist) {
      setCooks([...cooks, recipe])
    }
    else {
      notify()
    }
  }

  const handleAddToCooking = (cook,id,pretime,calorie)=>{
    setCooking([...cooking,cook])
 
    const newCook = cooks.filter(cook=> cook.id !== id)
    setCooks(newCook)
    setTime(time + pretime)
    setCalories(calories + calorie)
}

  return (
    <>
      <header className='max-w-[1320px] mx-auto'>
        <Header></Header>
      </header>
      <main className='max-w-[1320px] mx-auto'>
        <Recipe calories={calories} time={time} cooking={cooking} handleAddToCooking={handleAddToCooking} cooks={cooks} handleAddToCook={handleAddToCook} recipes={recipes}></Recipe>
      </main>
      <ToastContainer />
    </>
  )
}

export default App
