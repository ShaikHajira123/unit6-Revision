
import {useState , useEffect} from 'react'
import axios from 'axios'
import  {useSearchParams} from 'react-router-dom'

export const Products = () => {
   

    const [prod , setProd] = useState([])
    const [params , setParams] = useSearchParams()
    const [page , setPage] = useState(1)
    const [sort , setSort] = useState("1")
    const [color , setColor] = useState([])
    const [brandName ,setBrand] = useState([])
    const [total , setTotal] = useState()
    
    const getData = () => {
        axios({
            url:"http://localhost:5000/products",
            method :'GET',
            params: {
                page,
                sort,
                brandName,
                color
            }
        }).then(({data}) => {
            console.log(data.product)
            setProd(data.product)
            setTotal(data.totalPages)
        }
        )
    }
    useEffect(()=> {
        getData()
    },[page,sort ,brandName,color])
    
   
    useEffect(()=> {
       setParams({
            page,
            sort,
            brandName,
            color
        })
    },[page ,sort ,brandName,color, setParams ])

   
    return (
        <div>

            <select name="" id="" onChange={(e)=>setSort(e.target.value)}>
                <option value="1">Asc </option>
                <option  value="-1">Des</option>
            </select>
            
            
            <select name="" id="" onChange={(e) => setBrand(e.target.value)}>
                <option value="">Filter By Brand</option>
                <option value="reebok">Reebok</option>
                <option value="nike">Nike</option>
                <option value="woodland">Woodland</option>
            </select>

            <select name="" id="" onChange={(e) => setColor(e.target.value)}>
                <option value="">Filter By Color</option>
                <option value="black">Black</option>
                <option value="grey">Grey</option>
                <option value="brown">Brown</option>
            </select>

        <button disabled={page==1} onClick={()=>setPage(page-1)}>Prev</button>
        <button  disabled={page==total}onClick={()=>setPage(page+1)}>Next</button>

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