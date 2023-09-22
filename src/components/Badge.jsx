import "../styles/badges.css"

function Badge(props){
    return <div>
        <h3>
            {props.nombre}
        </h3>
            <div>
                {<img src={props.ruta}/>}
                <small>
                    {props.experiencia}
                </small>
            </div>
    </div>
}

export default Badge