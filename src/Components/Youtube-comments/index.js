import '../Youtube-comments/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function YoutubeComments() {
    return (
        <div>
            <div class="form-outline">
                <input
                    type="text"
                    id="youtubeURL"
                    class="form-control"
                    aria-describedby="textExample1"
                    />
                <label class="form-label" for="youtubeURL">YouTube video's link</label>
            </div>
            <div id="textExample1" class="form-text">We generate a report of the sentiment analysed.</div>
        </div>
    )
}