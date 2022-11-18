import AddremoveBtn from "./addremovbtn"
import { useState } from "react"
import Bill from "./bill"
function Card({ id, title, price, image }) {
    const [count, setcount] = useState(0)
    const increase = () => {
        setcount(count + 1)
    }
    const decrease = () => {
        if (count >= 1) {
            setcount(count - 1)
        }
    }
    return (
        <div id={id} className="card ">
            <div className="img-vb">
                <img width='110' height='96' src={image} alt="" />
                <div className="infocontainer">
                    <div className="info">
                        <span className="card-title"> {title}</span>
                        <span>{price} تومان</span>
                    </div>
                    <div className="showindex">

                        <AddremoveBtn click={decrease} className="ibdibtn1" src='/images/minus.png' />
                        <span>{count}</span>
                        <AddremoveBtn click={increase} className="ibdibtn2" src=' /images/add.png' />

                    </div>
                </div>
            </div>
            <div>
                <span style={{ display: 'flex' }} className="price">{count * price} تومان</span>
            </div>
            <Bill style='none' price={count * price} />
        </div>
    )
}
export default Card