function Billtxt({ txt, numbet, fontb, price }) {
    return (
        <div className="billtextcontainer">
            <span>{txt} </span>
            <span style={{ direction: 'rtl', fontWeight: fontb }}> {price}</span>
        </div>
    )
}
export default Billtxt