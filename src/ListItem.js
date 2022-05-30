export default function ListItem(props) {
    return (
        <ul className="hobbies-list">
        <li>
            <a href= {props.website}
            target="_blank" >{props.title}
            </a>      
        </li>
    </ul>
    )
  }