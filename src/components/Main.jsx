/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './MusicPlayer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import add from '../assets/icons/add.png'
import Playing from './Player';
function MainPage() {
    const [usernames, setUsernames] = useState([]);
    const [usernameInput, setUsernameInput] = useState('');
    const handleAddUsername = () => {
        if (usernameInput.trim() && !usernames.includes(usernameInput.trim())) {
          setUsernames(prevUsernames => [...prevUsernames, usernameInput.trim()]);
          setUsernameInput(''); // Clear the input field after adding
          document.getElementById('my_modal_1').close(); // Close the modal
        }
      };
    return (
    <div className=" flex flex-col  ">
   <dialog id="my_modal_1" className="modal">
  <div className="modal-box ">
    <form method="dialog" className='bg-red-500'>
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg"></h3>

    <label className=" mt-8 input input-bordered flex items-center gap-2  ">
    
    <input type="text" className="grow"
     onChange={(e) => setUsernameInput(e.target.value)} 
    placeholder="username" />
   
  </label>
  <button className="btn btn-secondary"
  
  onClick={handleAddUsername}
  >add</button>
  </div>
</dialog>

     <button className="fixed top-4 right-4
       text-white p-4 rounded-full 
      shadow-lg  bg-transparent w-auto h-auto bg-white
 "
 
 onClick=
 {()=>document.getElementById('my_modal_1').showModal()}
 >
  <img src={add} alt="" width='40px' />
</button>

      <div className="cont mt-6">
       <Playing username= {'cascery'}/>

       <div className="cont">
        {usernames.map((username, index) => (
          <Playing key={index} username={username} /> // Render the Playing component for each username
        ))}
      </div>

      </div>
    </div>
  );
}

export default MainPage;
