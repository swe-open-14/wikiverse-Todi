import React, {useEffect, useState} from 'react';
import apiURL from '../api';

const [pages, setPages] = useState([])
function App() {
 
  async function handleClick(){
     const response = await fetch({apiURL});
     const data = await response.json();
     setPages(data);
 }

 use
 
     return (
         <>
             <botton onClick = {handleClick}> Get User</botton>
             <apiURL URl={URl}/>
 
         </>
     )
 }
 
useEffect
export const Page = (props) => {

  return <>
    <button>{props.page.title}</button>
    <br></br>


  </>
} 
export default pages;