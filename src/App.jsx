import { useEffect, useState } from "react";
import ClicktoAdd from "../components/ToAdd";
import RenderItem from "../components/renderItem";
import Selector from "../components/select";




export function App() {
  
  const [list , setList] = useState([])
  const [check , setCheck] = useState("All")
  const [load , setLoad] = useState(false)
  const [error , setError] = useState(false)


  let a = "https://jsonplaceholder.typicode.com/posts"
  useEffect (() => {
     
    

    setLoad(true) 
    //  setTimeout(() => {
      
      fetch(a).then((f) => {
        return f.json()
       }).then((e) => {
         const data = e.map((item) => {
          return {
            ...item, status:false
          }
         })
         setList(data)

        //  setLoad(false)
         
       })
       .catch(() => { // تو این کد یعنی ما زمانی که ارور خوردیم تو ریکوست
        // setLoad(false)
        setError(true)
       })
       .finally(() => {
        setLoad(false)
       }) // این داره میگه در هرررررر صورت این کدو اجرا کن. چه ریکوست موفقیت امیز بود چه موفقیت امیز نبود

       setError(false)
       
    //  } , 200 )
  } , [])
   
  
  let state = (title) => {
    let newMap = list.map((e) => {
      if( e.title === title ) {
       return {
          title: e.title,
          status: !e.status,
        }
      }
      return e;
    })
    setList(newMap)
    
  }
  console.log(list)
  const renderListAll = list.filter((e) => {
    
    if(check === "done"){
     return e.status == true;
    }else if(check === "todo") {
      return e.status == false;
      
    }
    else if (check === "All") {


      return true;
    }
    
  })
  if(load === true) {
    return <h1>loading</h1>
  }else{
    return(
      
      <div style={{ display: "flex", justifyContent: " center", alignContent: "center", flexDirection: "column" , marginTop: "200px" , flexWrap: "wrap" }}>


        <ClicktoAdd handle = {(e) => {
          let a = { title: e ,status: false ,}

          const setu = [...list , a ]
          setList (setu)
          
        }}/>


        <Selector setCheck = {setCheck} check= {check}/>
        
        <h1>{error == true ? "got error" : null /* یا "" */}</h1>


        {  renderListAll.map((e) => {
          
          return <RenderItem key={e.id} title = {e.title} status = {e.status} state = {state} />
        }) }
        
        
        
        
        
        
      </div>
      
    )
  }
    
    
  }