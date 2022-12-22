import React from 'react'

const User = ({user}) => {
  return (
    <div>
        {`user name : ${user.name} and  user email : ${user.email}`}
    </div>
  )
}

export default User