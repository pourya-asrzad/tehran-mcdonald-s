import Card from "./card"
import data from '../data/data'
function Cardcontainer({ onsaveincontainer }) {
    // let sumol = 0
    function savedatachange(savenum) {
        // sumol += 
        onsaveincontainer(savenum)
    }
    return (
        <div className="cardcontainer">
            {data.map((element) => {
                return (
                    <Card onclick={savedatachange} key={element.id} title={element.title} price={element.price} image={element.image} />
                )
            })}

        </div>
    )
}
export default Cardcontainer