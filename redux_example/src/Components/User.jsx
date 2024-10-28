import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function User() {

    const [user, setUser]=useState(null)
    const [loading, setLoading]=useState(false)
    const [error, setError]=useState(null)
    useEffect(()=>{

        async function getAllUsers(){
            try{
                setLoading(true)
                const user=await fetch('https://jsonplaceholder.typicode.com/users/1')
                const userData=await user.json()
                console.log(userData)
                setUser(userData)
            }
            catch(err)
            {
                setError(err)
            }
            finally{
                setLoading(false)
            }
        }
        getAllUsers()

    },[])

    if(loading)
    {
        return <div>...loading</div>
    }
    if(error)
    {
        return <div>Error: {error.message}</div>
    }
  return (
    <div>
        {user?(
        <>
            Name: {user.name} <br/>
            Phone Number: {user.phone}
        </>
        ):(
            <div>....Loading</div>
        )}
    </div>
  )
}

export default User
