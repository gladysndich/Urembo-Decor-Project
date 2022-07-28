import { Link } from 'react-router-dom'


function Item({ item }) {
  const {id, image, name, comment} = item

  return (
    image ? 
      <li className="Item">
        <section className='details'>
          <p id='details'>{comment}</p>
        </section>
        <h3>{name}</h3>
        <p style={{margin:'-20px'}}>{item}</p>
        <figure>
          <Link to={`/item/${id}/details`}>
            <img src={image} alt={name}></img>
          </Link>
        </figure>
      </li>
      : null
  );
}

export default Item;