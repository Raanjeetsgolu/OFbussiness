import axios from 'axios'
import React,{useEffect,useState} from 'react'
import './OFbussiness.css'
import AdjustIcon from '@mui/icons-material/Adjust';

const OFbussiness = () => {
    const [state, setstate] = useState([])
    const [labellist, setlabellist] = useState([])
    useEffect(() => {
        const getinfo= async () =>{
            const data = await axios.get(`https://api.github.com/repos/facebook/react/issues`); 
            const val=await data.data
            setstate(val)
            // setlabellist(val.labels)
            console.log(val[0].id)
            console.log(val)
            // console.log(data.data.updated_at)
            // console.log(data.data.title)
            // console.log(data.data.labels[0].name)
            //  setstate(data.data)
            const labellistu =state.map(val=>(val.labels))
            setlabellist(labellistu)
            console.log(labellist)
        }
        getinfo();
    }, [])
    
    return (
        <div className="container">
            <div className="header">
                <div>

                </div>
                <div className="header_left">
                <h6 className="header_item" >Author</h6>
                    <h6 className="header_item">Label</h6>
                    <h6 className="header_item">Projects</h6>
                    <h6 className="header_item" >Milestone</h6>
                    <h6 className="header_item" >Assignee</h6>
                    <h6 className="header_item">Sort</h6>
                </div>
                    
            </div>
            <div className="file_details">
            
            {state.map((data)=>(
                <div  className="filedata">
                    <div>
                  
                    <p style={{display: 'inline'}} ><AdjustIcon style={{ fontSize:"16px", color: "olivedrab" }}/><p className="contentdata" ><strong className="data_title">{data.title} </strong>
                   <span>{data.labels.map((val)=>(
                       <>
                       <span  style={{backgroundColor: String(val.color)}}  >{val.name}</span>
                       {/* <p style={{backgroundColor: "#FF0000"}}>{val.name}</p> */}
                       
                       </>))}
                       </span>
                       {/* <p>{ }</p> */}
                       <p> by {data.user.login}</p>
                       </p>
                       </p>
                       </div>
                </div>
            ))}
            
            </div>
            
        </div>
    )
}

export default OFbussiness
