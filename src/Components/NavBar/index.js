import "../NavBar/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import store from '../../store';


function NavBar(){
    const NAVBAR = store.getState()['nav_bar'];
    console.log(NAVBAR)
    return(
        <nav className="navbar nav-pills">
            { NAVBAR.map(navtab => (
                <div className="nav flex-column nav-pills" 
                    id="v-pills-tab" 
                    role="tablist"
                    aria-orientation="vertical">
                        <a className={"nav-link " + navtab.active ? "active" : ""}
                            id={"v-pills-" + navtab.title + "-tab"}
                            keys={navtab.title}
                            href="#"
                            aria-controls={"v-pills-" + navtab.title}
                            aria-selected="true">{navtab.title}</a>
                </div>
            ))}
            <div className="tab-content" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">...</div>
            </div>
        </nav>
    )
}

export default NavBar;