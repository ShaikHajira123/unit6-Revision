
import {useState , useEffect} from 'react'
import axios from 'axios'
import  {useSearchParams} from 'react-router-dom'

export const Product = () => {
   

    const [prod , setProd] = useState([])
    const [params , setParams] = useSearchParams()
    const [page , setPage] = useState(1)
    const [sort , setSort] = useState("1")
    const [brand ,setBrand] = useState("")
    
    const getData = () => {
        axios({
            url:"http://localhost:5000/product",
            method :'GET',
            params: {
                page,
                sort,
                brand
            }
        }).then(({data}) => {
            console.log(data.product)
            setProd(data.product)
        }
        )
    }
    const [filt , setFilt] = useState(prod)
    useEffect(()=> {
        getData()
    },[page,sort ,brand])
    
   
    useEffect(()=> {
       setParams({
            page,
            sort,
            brand
        })
    },[page ,sort ,brand, setParams  ])

    // const handleFilter =(e)=> {
        
    //         const keyword = e.target.value;
        
           
    // }
    return (
        <div>

            <select name="" id="" onChange={(e)=>setSort(e.target.value)}>
                <option value="1">Asc </option>
                <option  value="-1">Des</option>
            </select>
            
            <select name="" id="" onChange={(e) => handleFilter(e.target.value)}>
                <option value="">Filter By Brand</option>
                <option value="reebok">Reebok</option>
                <option value="nike">Nike</option>
                <option value="woodland">Woodland</option>
            </select>
            <select name="" id="">
                <option value="">Filter By Color</option>
                <option value="black">Black</option>
                <option value="grey">Grey</option>
                <option value="brown">Brown</option>
            </select>
        <button disabled={page==1} onClick={()=>setPage(page-1)}>Prev</button>
        <button  onClick={()=>setPage(page+1)}>Next</button>

            {prod.map((e)=>{
           return(
           <div style={{display:"grid" }}>

               <img src={e.imgUrl} alt="" />
               <div>

               <h2>{e.name}</h2>
               <p>{e.color}</p>
               <p>Rs.{e.price}</p>
               <p>{e.brandName}</p>
               </div>
           </div>
            )
           })
        }
        </div>
    )
}