import React from 'react';
import { Link } from 'react-router-dom'

const MessageLink = ({profile}) => {
  return (
    <>
      <Link
        to={{
          pathname: "/messages",
          state: profile 
        }}> Start A Conversation
      </Link>
    </>
  )
}

export default MessageLink;