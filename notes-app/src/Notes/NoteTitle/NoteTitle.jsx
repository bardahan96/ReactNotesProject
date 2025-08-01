import { useEffect, useState, useLocalStorage } from "react";
import { BrowserRouter, NavLink } from "react-router";
import { useNavigate } from "react-router";
import './NoteTitle.css'
export default function NoteTitle({sharedStorage, noteName}) {
    const navigate = useNavigate()
    
    function getLinkValue (e) {
        const value = e.target.textContent

    }

    

    return (
        
        <div className="noteTitles">  
                 
               {[...sharedStorage].map((note, index) => {
                   return (
                       <div>
                           <NavLink onClick={noteName} id={note.title} to="NoteContent" key={index}>
                                <div className="noteTitle">
                                   <span  >{note.title}</span>
                                   <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M1 1L7 7L1 13" stroke="#9EA2AE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                   </svg>
                               </div> </NavLink>
                       </div>
                   )
               })} 
        </div>
     )
};



