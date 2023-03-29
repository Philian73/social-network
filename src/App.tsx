import React from 'react'
import './App.css'

const App: React.FC = () => {
   return (
      <div className="wrapper">
         <header className="header">
            <img src="https://www.reactacademy.live/logoReact300px.png" alt="Logo" />
         </header>
         <nav className="nav">
            <div>
               <a href="#profile">Profile</a>
            </div>
            <div>
               <a href="#messages">Messages</a>
            </div>
            <div>
               <a href="#news">News</a>
            </div>
            <div>
               <a href="#music">Music</a>
            </div>
            <div>
               <a href="#settings">Settings</a>
            </div>
         </nav>
         <div className="content">
            <div>
               <img src="https://i.ibb.co/CQyysgB/pexels-photo-248797.jpg" alt="wallpaper" />
            </div>
            <div>
               ava + description
            </div>
            <div>
               My posts
               <div>
                  New post
               </div>
               <div>
                  <div>
                     post1
                  </div>
                  <div>
                     post2
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default App