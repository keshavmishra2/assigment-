

import { React , useEffect, useState} from 'react'
import { useNavigate} from 'react-router-dom'


import axios from "axios"
const Nav = () => {
  const [data, setData] = useState([])
    const navigate = useNavigate()
    
    const loadNewPage = () => {
     
        navigate("/PostData")
  }
  useEffect(() => {
    axios
      .get("http://localhost:8000/post")
      .then((img) => {
        console.log({ img: img.data });
        setData(...img.data)
      
      })
      
    
    
       .catch((err) => {
         console.log(err);
       });
     console.log(data)

  }, []);
  console.log("data", data);
  
  const search = (e) => {
  }
  return (
    <div>
          <div className='navbar' >
              <div className='item'> <div>  <button  className='button' onClick={loadNewPage} >+</button>  </div></div>
           
              <div className='heading'> Gallary </div>
        <div className='item'> <input className='input' type="text"  onChange={search} placeholder='SEARCH' /> </div>
      {data.title}
          </div>
    </div>
  )
}
export default Nav;