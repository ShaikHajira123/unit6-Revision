
import { useState } from "react";

export const Login = () => {
  const [user , setUser] = useState({
      Name:'',
      Email:'',
      Password:'',
      ConfirmPassword:''
  })

  const handleChange = (e) =>{
    //   const {name,value} = e.target
    //    [name]= value
    // e.preventDefault()
    setUser({...user,
        [e.target.name] : e.target.value
        
    })
  }


  const handleSubmit = async()  => {
   
        try{
             let res = await fetch('http://localhost:8080/users',{

                 method:'POST',
                 headers:{"Content-Type":'application/json'},
                 body:JSON.stringify(user)
             })
             let data = await res.json()
             console.log(data)
        }
        catch(err){
            console.log(err)
        }
    }
    
  
 



    return(
        <div>
            
                <input type="text" name="Name" placeholder="Name" onChange={handleChange}/>
                <input type="text" name="Email" placeholder="Email" onChange={handleChange}/>
                <input type="text" name="Password" placeholder="Password" onChange={handleChange}/>
                <input type="text" name="ConfirmPassword" placeholder="ConfirmPassword" onChange={handleChange}/>
                <input type="submit" onClick={handleSubmit}  />
           
        </div>
    )
}