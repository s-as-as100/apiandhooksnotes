import React, {useEffect, useState} from 'react';

const AppAwait = () => {


    const[users,setUsers] = useState([])

    const getUsers = async () =>{
      

        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        setUsers(await response.json())
        // const data =  await response.json()
        // console.log(data)
    }

    useEffect(()=>{
        getUsers()
    },[])

    

    return ( 
        <div>
            <h1> API CALL USING ASYN AWAIT</h1>
            {
                
               users.map((person)=>(<p key ={person.id}> 
               <ul>
                   <li>{person.username}  </li>
                   <li>{person.email}</li>
                   <li>{person.id}</li>
               </ul> </p>)) 
            }
        </div>
     );
}
 
export default AppAwait;