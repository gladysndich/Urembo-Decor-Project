import Item from "./Item"

function ItemCollection({collection}) {
    const renderCollection = () => {
        return collection.map(item => {
            return <Item key={item.id} item={item} />
        })
    }


    return (
        <div className="ItemCollection">
            <h2>Your Collection:</h2>
            <ul>
                {renderCollection()}
            </ul>
        </div>
    );
}

export default ItemCollection;