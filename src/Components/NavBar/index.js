import "../NavBar/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import store from '../../store';


function NavBar(){

    const NAVBAR = store.getState()['nav_bar'];
    const NAVBAR_ACTIVE = store.getState()['nav_bar_active']

    let RENDERING_COMPONENT = updateRenderingComponenent()

    function updateRenderingComponenent(){
        return NAVBAR[NAVBAR_ACTIVE].component;
    }

    function openComponent(index){
        console.log(store.getState(), index)
        store.dispatch({
            type: 'updateNavActive',
            payload: {index: index}
        })
        RENDERING_COMPONENT = updateRenderingComponenent();
        console.log(RENDERING_COMPONENT)
    }

    return(
        <nav className="navbar nav-pills">
                <div className="nav flex-column nav-pills" 
                    id="v-pills-tab" 
                    role="tablist"
                    aria-orientation="vertical">
                {NAVBAR.map((navtab, index) => (
                    <div className={"nav-link " + index === parseInt(NAVBAR_ACTIVE) ? "active" : ""}
                        id={"v-pills-" + navtab.title + "-tab"}
                        key={navtab.title}
                        aria-controls={"v-pills-" + navtab.title}
                        aria-selected="true"
                        onClick={() => openComponent(index)}>
                            {navtab.title}
                    </div>
                ))}
            </div>
            <div className="tab-content" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                    <RENDERING_COMPONENT />
                </div>
            </div>
        </nav>
    )
}

export default NavBar;