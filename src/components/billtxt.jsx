function Billtxt({ txt, numbet, fontb }) {
    return (
        <div className="billtextcontainer">
            <span>{txt} </span>
            <span style={{ direction: 'rtl', fontWeight: fontb }}> {numbet}</span>
        </div>
    )
}
export default Billtxt