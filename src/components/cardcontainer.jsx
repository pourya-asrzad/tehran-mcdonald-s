import Card from "./card"
import data from '../data/data'
function Cardcontainer() {
    console.log(data);
    return (
        <div className="cardcontainer">
            {data.map((element) => {
                return (
                    <Card id={element.id} title={element.title} price={element.price} image={element.image} />
                )
            })}

        </div>
    )
}
export default Cardcontainer