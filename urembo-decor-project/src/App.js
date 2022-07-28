import {useEffect, useState} from 'react'
import {Routes, Route} from 'react-router-dom';

import ItemCollection from './components/ItemCollection';
import Header from './components/Header';
import WishList from "./components/WishList";
import ItemContainer from './components/ItemCollection';
import ItemDetails from './components/ItemDetails';
import Home from './components/Home';

function App() {
  const [items, setItems] = useState([])
  const [collection, setCollection] = useState([])
  const [wishlist, setWishlist] = useState([])
  const [search, setSearch] = useState("")
  const [categorySelect, setCategorySelect] = useState('All')
  
  useEffect(() => {
    fetch('http://localhost:8000/items')
    .then(r => r.json())
    .then(data => setItems(data))
  }, [])
  
  useEffect(() => {
    fetch('http://localhost:8000/collection')
    .then(r => r.json())
    .then(data => setCollection(data))
  }, []) 
  useEffect(() => {
    fetch('http://localhost:8000/wishlist')
    .then(r => r.json())
    .then(data => setWishlist(data))
  }, []) 

  const addToCollection = (newItem) => {
   setCollection(items => [...items, newItem])
  }
  const addToWishlist = (newItem) => {
   setWishlist(items => [...items, newItem])
  }
  const removeFromWishList = (item) => {
   console.log(item)
   setWishlist(wishlist.filter(items => items.id !== item.id))
  }

  const filterItems = () => {
   let filteredItems = [...items]
   if (search === '') {
     filteredItems = [...items]
   } else {
     filteredItems = [...items].filter(item => item.name.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase()))
   } 

   let filteredItems2 = [...filteredItems]
   if(categorySelect === 'All') {
     filteredItems2 = [...filteredItems]
   } else {
     filteredItems2 = [...filteredItems].filter(item => item.category.toLowerCase() === categorySelect.toLowerCase())
   }

   return filteredItems2
 }


  return (
    <div className="App">
      <Header className="App-Header">
        Urembo Decor App
      </Header>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path="/items/:id/details" element={<ItemDetails addToCollection={addToCollection} addToWishlist={addToWishlist} removeFromWishList={removeFromWishList} />}/>
        <Route path="/items" element={<ItemContainer items={filterItems()} search={search} setSearch={setSearch} categorySelect={categorySelect} setCategory={setCategorySelect} />}/>
        <Route path='/collection' element={<ItemCollection collection={collection} />}/>
        <Route path="/wishlist" element={<WishList wishlist={wishlist} />}/>
      </Routes>
    </div>
  );
}

export default App;