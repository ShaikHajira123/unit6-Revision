
import axios from 'axios'
import {useState ,useEffect} from 'react'

export const Users = () => {
    
    const [user , setUser] = useState(
    {
    name :"",
    gender : "",
    email : "",
    password :"",
    address : []
  
    })
   
    const [add , setAddress] = useState({
            houseNo : "",
            street :"",
            landmark : "",
            city : "",
            pincode : "",
            country : ""
            
        })
        
        const handlechange = (e) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
        
        // console.log(user)
      
    }
    const handlechange1 = (e) => {
        setAddress({
            ...add,
            [e.target.name]:e.target.value 
        })
        //  console.log(add)
        //  console.log(user)
    }

    const handlesubmit = (e) => {
        e.preventDefault()
         user.address.push(add)
        fetch("http://localhost:5000/users/create",{
            method:'POST',
            headers : {
                "Content-Type":"application/json"
            },
            body : JSON.stringify(user)
        })
    //  axios.post("http://localhost:5000/users",user)
        console.log(user)
    }

    return(
       <div>
         <h1>SignUp</h1>
         <form onSubmit={handlesubmit}>
         <input type="text" placeholder="Name" name="name" onChange={handlechange}/>
         <input type="text" placeholder="Gender" name="gender" onChange={handlechange}/>
         <input type="text" placeholder="Email" name="email" onChange={handlechange}/>
         <input type="text" placeholder="Password" name="password" onChange={handlechange}/>
         <input type="text" placeholder="HouseNo" name="houseNo" onChange={handlechange1}/>
         <input type="text" placeholder="Street" name="street" onChange={handlechange1}/>
         <input type="text" placeholder="Landmark" name="landmark" onChange={handlechange1}/>
         <input type="text" placeholder="City" name="city" onChange={handlechange1}/>
         <input type="text" placeholder="Pincode" name="pincode" onChange={handlechange1}/>
         <input type="text" placeholder="Country" name="country" onChange={handlechange1}/>
         <input type="submit" value="submit"/>
         </form>
       </div>
    )
    
}
