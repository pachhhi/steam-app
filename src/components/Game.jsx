import "../styles/game.css"

function Game(props){
    return <div class="gamecontainer container">
        <img src={props.img}/>
        <h2>{props.nombre}</h2>
        <div class="info">
            <div class="time">
                <p>Time played</p>
                <small>
                    {props.tiempo}
                </small>
            </div>
        </div>
    </div>
}

export default Game