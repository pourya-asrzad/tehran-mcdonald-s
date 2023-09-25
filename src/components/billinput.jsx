
function Billinput({ setValue, value, clickHandeing }) {
    return (
        <div className="bill-input">
            <input placeholder="کد تخفیف" value={value} onChange={(e) => setValue(e.target.value)} type="text" />
            <div className="tickbtn" onClick={() => clickHandeing(true)}><img className="tickimg" src="/images/tick.png" alt="" /></div>
        </div>
    )
}
export default Billinput