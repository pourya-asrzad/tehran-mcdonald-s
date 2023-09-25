import Cardcontainer from "./cardcontainer"
function Menu({ ongetinmenu }) {
    function gettotalmoney(a) {
        // console.log(a);
        ongetinmenu(a)
    }
    return (
        <div className="menu">
            <div className="menuheader">
                <span className="menutitle">رستوران مک دونالد شعبه تهران</span>
            </div>
            <div>
                <Cardcontainer onsaveincontainer={gettotalmoney} />
            </div>
        </div>
    )
}
export default Menu