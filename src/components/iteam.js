
function Iteam(props){
    return(
        <>
      <div className="card mb-0" id="iteam">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={props.image} className="img" alt=""/>
    </div>
    <div className="col-md-8 ">
      <div className="card-">
        <h5 className="title">{props.title}</h5>
        <p className="text">{props.time}</p>
        <p className="text">{props.stat}  </p>
        <p className="text1" >{props.content}</p>
        <button type="button" className="but" id>READ MORE</button>
      </div>
    </div>
  </div>
</div>
      </>
    )
}
export default Iteam;