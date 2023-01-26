function SayMyName(props){
    return(
        <div>
            <p>Olá, {props.name}!</p>
            <p>Sei que você tem {props.age} anos.</p>
        </div>
    )
}

export default SayMyName