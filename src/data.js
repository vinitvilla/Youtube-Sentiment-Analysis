import Home from "./Components/Home/index.js";
import YoutubeComments from "./Components/Youtube-comments/index.js";

const NAV_BAR = [
    {
        title: "Home",
        component: Home
    },
    {
        title: "Youtube",
        component: YoutubeComments
    }
]

export const INITIAL_STATE = {
    "nav_bar": NAV_BAR,
    "nav_bar_active": 0
}
