import Billtxt from "./billtxt"
import Billinput from "./billinput"
import { useEffect, useState } from "react"

function Bill({ style, price, money }) {
    const service = price > 0 ? 7 * price / 100 : 0
    const [off, setOff] = useState(0)
    const [value, setValue] = useState("")
    const [isClicked, seClick] = useState(false)
    const total = (price + service) - (price + service) * off / 100
    useEffect(() => {
        if (value === "1256" && isClicked) setOff(15)
    }, [value, isClicked])

    return (
        <div style={{ display: style }} className="bill">
            <Billtxt price={price} txt={':جمع کل سفارشات'} numbet={' تومان'} />
            <Billtxt price={service} txt={':حق سرویس و کارمزد'} numbet={' تومان'} />
            <Billtxt price={off} txt={':تخفیف'} numbet={' درصد '} />
            <Billinput clickHandeing={seClick} setValue={setValue} value={value} />
            <div className="price-for-pay">
                <Billtxt price={total} fontb='bold' txt={' :مبلغ قابل پراخت '} numbet={' تومان '} />
            </div>
            <div className="submitorderbtn">
                <span>ثبت سفارش</span>
            </div>
        </div>
    )
}
export default Bill
