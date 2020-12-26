import React from 'react'; 

// import styles
import "./styles.css"; 

export default function Post(props) {
    const {item} = props; 

    return (
        <div key={item.id} className="card">
            <a href={`/item/${item.id}`}>
                <img className="medium" src={item.image} alt={item.name} />
            </a>
        </div> /* end of card class */
    ); 
}
