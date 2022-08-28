import React from 'react'
import {Outlet, useSearchParams} from 'react-router-dom'

export const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const showActiveUsers = searchParams.get('filter') === 'active'
    return (
        <>
        <div>
            <h1>List of users</h1>
            <div>
                user 1
            </div>
            <div>
                user 2
            </div>
            <div>
                user 3
            </div>
            <Outlet/>
            <button onClick={()=> setSearchParams({filter:'active'})}>Active Users</button>
            <button onClick={()=> setSearchParams({})}>Reset Filters</button>
        </div>
            {
              showActiveUsers ? (<h2> Showing Active users</h2>)  : (<h2> Showing All users</h2>)
            }
        </>
    )
}
