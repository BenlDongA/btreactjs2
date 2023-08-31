function Layoutcon(props){
    return(
        <>
    <div className="card-coment">
    <img src={props.avata}  className="avata" alt="">

    </img>
    <div className="coment">{props.coment}</div>
    <div className="time-coment">{props.timecoment}</div>

    </div>
    


        </>
    )
}
export default Layoutcon;