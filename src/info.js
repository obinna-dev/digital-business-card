import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope} from "@fortawesome/free-solid-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"


export default function Info()  {
    return  (
        <div className="info--section">
            <div className="info-text-container">
                <h1 className="name">Obinna - Dev</h1>
                <p className="designation">Frontend Developer</p>
                <p className="website"><a href="https://github.com/obinna-dev">github.com/obinna-dev</a></p>
                <div className="button--container ">
                    <div className="btn email--btn"><FontAwesomeIcon icon={faEnvelope} className="email-icon"/> Email</div>
                    <div className="btn linkedin--btn"><FontAwesomeIcon icon={faLinkedin} className="linkedin-icon"/> LinkedIn</div>
                </div>
            </div>
        </div>
    )
}