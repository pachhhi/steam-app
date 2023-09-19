import imgprofile from "../img/profileimg.jpg"
import "../styles/profileheader.css"
import badge from "../img/badge.png"

function ProfileHeader(){
    return <div>
        <div class="profileheader container row">
            <div class="col xs-12 sm-12 md-4 lg-4 xl-4 xxl-4">
                <img src={imgprofile}/>
            </div>
            <div class="col">
                <div class="row">
                    <h4>pachhhi ,</h4>
                </div>
                <div class="row">
                    <small>
                        tomasss
                        Argentina
                    </small>
                </div>      
                <div class="row">
                <small class="biography">
                    como te quiero acadeeeee
                </small>
            </div>          
            </div>
            <div class="col leveldiv">
                <h3>Level<p>31</p></h3>
                <div class="badgediv">
                    { <img src={badge}/> }
                    <small>
                        Tomoko   <br/>
                        100 XP
                    </small>
                </div>
            </div>
        </div>
    </div>
}

export default ProfileHeader;