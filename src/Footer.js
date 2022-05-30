import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer(props) {
    return (
        <div className="footer--container">
            <a href= {props.item.link}
            target="_blank" ><FontAwesomeIcon icon = {props.item.icon} className="social--media--icons"></FontAwesomeIcon>
            </a>  
        </div>
    )
  }