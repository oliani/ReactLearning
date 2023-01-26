function Person(props){
    return (
        <div>
            <img src={props.img} alt={props.name}/>
            <h2>Nome: {props.name}</h2>
            <h3>Idade: {props.age}</h3>
            <p>Profissão: {props.job}</p>
        </div>

    )

}

export default Person