function Card(props){

    console.log(props.user,props.age)

    return <div className="card">
        <img src={props.img} alt="" />
      <h1>{props.user}</h1>
      <h3>{props.age}</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button>View Profile</button>
      </div>
}
export default Card