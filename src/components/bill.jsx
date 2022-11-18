import Billtxt from "./billtxt"
import Billinput from "./billinput"

function Bill({ style, price }) {


    return (
        <div style={{ display: style }} className="bill">
            <Billtxt price={price} txt={':جمع کل سفارشات'} numbet={'0 تومان'} />
            <Billtxt price={price} txt={':حق سرویس و کارمزد'} numbet={'0 تومان'} />
            <Billtxt price={price} txt={':تخفیف'} numbet={'0 درصد '} />
            <Billinput />
            <div className="price-for-pay">
                <Billtxt price={price} fontb='bold' txt={' :مبلغ قابل پراخت '} numbet={'0 تومان '} />
            </div>
            <div className="submitorderbtn">
                <span>ثبت سفارش</span>
            </div>
        </div>
    )
}
export default Bill
