function Concept (props){

return (
<li className="concept">
        <img src={props.image} alt={props.title}/>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </li>


);
    }
export default Concept;