import imgprofile from "../img/profileimg.jpg"
import "../styles/profileheader.css"
import badge from "../img/badge.png"

function ProfileHeader(){
    return <div>
        <div class="profileheader container row">
            <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-2">
                <img src={imgprofile}/>
            </div>
            <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-6 ">
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
            <div class="leveldiv col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
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