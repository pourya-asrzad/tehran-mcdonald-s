function AddremoveBtn({ src, className, click }) {
  return (<>
    <div onClick={click} className={'ibdibtn ' + className}>
      <img src={src} alt="" />
    </div>
  </>
  )
}
export default AddremoveBtn