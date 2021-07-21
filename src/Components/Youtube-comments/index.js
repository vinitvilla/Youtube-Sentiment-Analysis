import '../Youtube-comments/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function YoutubeComments() {
    return (
        <div>
            <div className="form-outline">
                <input
                    type="text"
                    id="youtubeURL"
                    className="form-control"
                    aria-describedby="textExample1"
                    />
                <label className="form-label">YouTube video's link</label>
            </div>
            <div id="textExample1" className="form-text">We generate a report of the sentiment analysed.</div>
        </div>
    )
}