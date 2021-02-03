import React from 'react'
import './Box1.css'
export default function Box({size}) {
  if( size === 'big'){
    return <div className="box big">big box</div>
  } else {
    return <div className="box small">small box</div>
  }
}
