import React from 'react'

// import styles
import "./styles.css"; 

// import data
import data from "../data"; 

// import components
import Post from "../components/Post"; 

export default function HomeScreen() {
    return (
        <div>
            <div className="row center">
            {
              data.posts.map(item => (
                <Post key={item.id} item={item} />
              ))
            }
          </div>
        </div>
    )
}

