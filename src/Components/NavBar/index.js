import "../NavBar/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import store from '../../store';
import { useSelector } from 'react-redux'

export function useNavBar() {
    return useSelector((state) => state.nav_bar)
}

export function useNavBarActive() {
    return useSelector((state) => state.nav_bar_active)
}

function NavBar(){
    const NAVBAR = useNavBar()
    const NAVBAR_ACTIVE = useNavBarActive()

    let RENDERING_COMPONENT = getRenderingComponenent()

    function getRenderingComponenent(){
        return NAVBAR[NAVBAR_ACTIVE].component;
    }

    function openComponent(index){
        console.log(store.getState(), index)
        store.dispatch({
            type: 'updateNavActive',
            payload: {index: index}
        })
        RENDERING_COMPONENT = getRenderingComponenent();
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