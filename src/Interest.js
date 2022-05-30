import ListItem from "./ListItem"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Interest(props) {

    const list = props.item.entries 
    const listItems = list.map(item => {
        return (
          <ListItem 
            key = {item.title}
            title = {item.title}
            website = {item.website}
          />
        )
      })

    return (
    <section className="features">
        <div className={props.item.className}>
        <FontAwesomeIcon icon = {props.item.icon} className="fa"></FontAwesomeIcon>
            <h3>{props.item.interest}</h3>
            <p>{props.item.moreDetails}</p>
            <br />
            <div className="dropdown">
                <div className={props.item.classNameForDropdown}>{props.item.nameOfList}</div>
                {listItems}
            </div>
        </div>
    </section>
    )
  }