import React from 'react'
import { useSelector } from 'react-redux'

const User = () => {
  const info = useSelector(state => state.user.info);

  return (
    <div>
        <h1>User</h1>
        {!info && (
          <div>
            <p>{JSON.stringify(info)}</p>
          </div>
        )}
    </div>
  )
}

export default User
