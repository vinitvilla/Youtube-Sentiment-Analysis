import Home from "./Components/Home/index.js";
import YoutubeComments from "./Components/Youtube-comments/index.js";

const NAV_BAR = [
    {
        title: "Home",
        active: true,
        component: Home
    },
    {
        title: "Youtube",
        active: false,
        component: YoutubeComments
    }
]

export const INITIAL_STATE = {
    "nav_bar": NAV_BAR
}
