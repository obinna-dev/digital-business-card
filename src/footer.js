import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faGithubSquare, faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

// import {faGrinTears} from '@fortawesome/free-solid-svg-icons'




export default function Footer()  {
    return  (
        <div className="footer--section">
            <FontAwesomeIcon icon={faTwitterSquare} className="socials-icon"/>
            <FontAwesomeIcon icon={faFacebookSquare} className="socials-icon"/>
            <FontAwesomeIcon icon={faInstagramSquare} className="socials-icon"/>
            <FontAwesomeIcon icon={faGithubSquare} className="socials-icon"/>        
        </div>
    )
}