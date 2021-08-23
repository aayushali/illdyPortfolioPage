import React from 'react'
import { useState, useEffect } from 'react';
function NewsAPI() {
    const [posts, setPosts] = useState([]);
useEffect(()=>{
    fetch('https://api.newscatcherapi.com/v2/search?q=Tesla&page_size=10',{
        method: 'GET',
        headers:{
            'x-api-key': '4dUHqwxzYPbKbUZS2tIjOT9V5aPQwBSQ_zOZCjvZm58'
        },
    })

    .then((res)=>{ 
    return res.json();
    })
    .then((data)=>{
        console.log(data);
        setPosts(data.articles);
    
    })
    .catch((err)=>{
        console.log(err);

    })

},[])
console.log(posts);
    return (
        <div>
          
        </div>
    )
}

export default NewsAPI;
