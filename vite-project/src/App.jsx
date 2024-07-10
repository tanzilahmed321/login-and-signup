import React, { useState } from 'react'
import Signup from "./component/Loginsignup/Signup";
import Login from './component/Loginsignup/Login';

const App = () => {
  const [condition,setCondition]= useState(false)
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const [name,setName] = useState()
  const [login_password,setLogin_Password] = useState()
  const [login,setLogin] = useState()

  
  const onClick_Handle = (e) => {
    e.preventDefault()
    if(!name || !email || !password){
      alert("Please fill all the fields")
    }else{  
      setCondition(true)
    }
    
  }
  const onSubmit_Handle = (e) => {
    e.preventDefault()
    if(!login_password || !login){
      alert("Please fill all the fields")
    
  }else{
    setCondition(false)
  }

  }
  const onChange = (e) => {
    const {id,value} = e.target
    setPassword({...password,[id]:value})

  }
  const onChange_username = (e) => {
    const {id,value} = e.target
    setName({...name,[id]:value})

  }
  const onChange_email = (e) => {
    const {id,value} = e.target
    setEmail({...email,[id]:value})

  }
  const onChange_login = (e) => {
    const {id,value} = e.target
    setLogin({...login,[id]:value})
    }
    const onChange_login_password = (e) => {
      const {id,value} = e.target
      setLogin_Password({...login_password,[id]:value})
      }
      const onClick_Handle_N =  () =>{
        setCondition(true)
      }
      const onChange_sign_N = () => {
        setCondition(false)
      }
  return condition == false ? <Signup onClick_Handle_N={onClick_Handle_N} onChange_Handle={onChange} onChange_Handle_username={onChange_username} onChange_Handle_email={onChange_email} onClick={onClick_Handle} /> : <Login onChange_sign_N={onChange_sign_N} onChange_login_password={onChange_login_password} onChange_login={onChange_login} onSubmit={onSubmit_Handle} />
}

export default App
