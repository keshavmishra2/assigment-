
import { useEffect, useState } from "react";
// import { useNavigate} from 'react-router-dom';
import axios from "axios";
import "./postdata.css"
const PostData = ()=>{
    const [data, setData] = useState({
        title: "",
        description: "",
        image: "",
    })
     
    // const navigate = useNavigate();
    // const navpage = () => {
    //    navigate("/");
    // }

    const handleChange =(e)=> {
    const {name, value} = e.target;
    setData({
        ...data,
        [name]: value
    })
    }
    useEffect(() => {
        axios.get("http//localhost:8000/post").then((data)=>console.log(data))
      },[])

    const savedetails = () =>{
        // alert("image saving ..");
        const { title, description, image} = data;
       if (image.title) {
          axios.post("http://localhost:8000/add", data)
            .then((res) => console.log(res));
        
        } else {
          alert("invalid input");
        }
    }
    return (
        <>
        <div id="navbar">
          <input className="serchbtn" placeholder="search...." type="search"></input>
          <h1> Add Content to Show </h1>
          <button>+</button>
        </div>
        <div className="formpage">
             <form id="container">
                <lable>Title</lable>
                <br></br>
                <br></br>
                <input type="text" name="title" placeholder="Enter title" onChange={handleChange} />
                <br></br>
                <br></br>
                <label>Decription</label>
                <br></br>
                <br></br>
                <textarea name="description" col="40" row="10" onChange={handleChange}></textarea>
                <br></br>
                <br></br>
                <lable>Upload Image</lable>
                <br></br>
                <br></br>
                <input type="file" name="image" onChange={handleChange}/>
             </form>
             <br></br>
             <button id="btn" onClick={savedetails}>Submit</button>
        </div>
        </>
    )
}

export default PostData;