import Billtxt from "./billtxt"
import Billinput from "./billinput"

function Bill({ style, price, money }) {
    // console.log(money);
    // console.log(style);e
    console.log(price);
    const service = price > 0 ? 7 * price / 100 : 0
    const total = price + service

    return (
        <div style={{ display: style }} className="bill">
            <Billtxt price={price} txt={':جمع کل سفارشات'} numbet={'0 تومان'} />
            <Billtxt price={service} txt={':حق سرویس و کارمزد'} numbet={'0 تومان'} />
            <Billtxt price={0} txt={':تخفیف'} numbet={'0 درصد '} />
            <Billinput />
            <div className="price-for-pay">
                <Billtxt price={total} fontb='bold' txt={' :مبلغ قابل پراخت '} numbet={'0 تومان '} />
            </div>
            <div className="submitorderbtn">
                <span>ثبت سفارش</span>
            </div>
        </div>
    )
}
export default Bill
