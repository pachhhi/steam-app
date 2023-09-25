import "../styles/badges.css"

function Badge(props){
    return <div>
        <h3>
            {props.nombre}
        </h3>
        <hr/>
            <div class="badgeinfo">
                {<img src={props.ruta}/>}
                <small>
                    {props.experiencia}
                </small>
            </div>
    </div>
}

export default Badge