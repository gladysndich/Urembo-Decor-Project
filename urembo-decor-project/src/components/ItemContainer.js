import React from 'react'
import Items from './Item'


function ItemContainer({ items, setSearch, search, setCategory, categorySelect }) {
    const renderItems = () => {
        return items.map(item => {
            return <Items key={item.id} item={item} />
        })
    }
    
    return(
        <div>
            <br></br>
            <div className='filters'>
                <br></br>
                <label>
                    Search:
                    <input type='text' name='name' onChange={(e) => setSearch(e.target.value)} value={search}/>
                </label>
                <br></br>
                <br></br>
                <label>
                    Select Category:
                    <select name='category' onChange={(e) => setCategory(e.target.value)} value={categorySelect} >
                        <option value='All'>All</option>
                        <option value='lighting'>Lighting</option>
                        <option value='mirror'>Mirror</option>
                        <option value='sculpture'>Sculpture</option>
                        <option value='wallart'>WallArt</option>
                        <option value='wallpaper'>Wallpaper</option>
                    </select>
                </label>
                <ul className='allItems'>
                    {renderItems()}
                </ul>
            </div>
        </div>
    );

}

export default ItemContainer;