import React from 'react'; 

// import styles
import "./styles.css"; 

// import data
import data from "../data"; 

export default function ItemScreen(props) {
    /** props.match.params.id =  */
    const item = data.posts.find(x => x.id === props.match.params.id)
    if(!item) {
      return <div> PRODUCT NOT FOUND </div>
    }
    return (
      <div className="ItemScreen">
        <div className="primary-info">
          <div className="image-container">
            <img className="large" src={item.image} alt={item.name} />
          </div>
          <ul>
            <li>
              <h1>{item.name}</h1>
            </li>
            <li>
              ${item.price}
            </li>
            <li>
              {item.location}
            </li>
          </ul>
        </div> {/* end of primary-info class */}
        <div className="secondary-info">
          <ul>
            <li>
              {item.condition}
            </li>
            <li>
              {item.description}
            </li>
          </ul>
        </div> {/* end of secondary-info class */}
      </div> /* end of ItemScreen class */
    )
}
