import React from 'react'

export default function Alart(props) {
  return (
   props.alart && <div class="alert alert-primary" role="alert">
  <strong>{props.alart.type}</strong>: {props.alart.msg}
 </div>
  )
}
