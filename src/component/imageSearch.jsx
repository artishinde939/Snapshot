import React, { useContext } from 'react'
import {InputContex} from "../context/inputContex"


export default function ImageSearch({photos}) {
  // console.log(photos);
  if(photos){
    return (
      <div>
         <div id='images'>{
           photos.map(photo => {
          // console.log(photo);
             return <img src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt="" key={photo.id} />
             {/* https://live.staticflickr.com/{server-id}/{id}_{secret}.jpg  */}
            })
          }
         </div>
      </div>
    )
  }
 
}

