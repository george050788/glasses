import React from 'react'

export default function Message ({ action, msg }) {
  return (
    <>
      <p>{msg}</p>
      {action ? (<button onClick={action}>Try Again</button>) : null}
    </>
  )
}
