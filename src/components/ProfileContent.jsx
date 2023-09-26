import "../styles/profilecontent.css"
import macroblank from "../img/macroblank.jpg"
import ProfileLinks from "../pages/ProfileLinks";

function ProfileContent (){
    return <div>
        <div class="row profilecontent container">
            <div class="col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                <div class="tittlediv">
                    <h4>Favorite Guide</h4>
                </div>
                <div class="guide">
                    <img src={macroblank}/>
                    <div class="guidetext">
                        <h4>ꓘN∀⅂ꓭOꓤϽ∀ꟽ</h4>  
                        <small>
                            Created by - <p> pachhhi ,</p>
                        </small>  
                    </div>    
                </div>
            </div>
            
            <div class="col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <div class="onlinetittle">
                    <h4>Currently Online</h4>
                        <div>
                            <ProfileLinks/>
                        </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div>
                <h4>Captures</h4>
                <div>
                    
                </div>
            </div>
        </div>
        <aside>
            <h3>IN PROCESS...</h3>
        </aside>
    </div>
}

export default ProfileContent;