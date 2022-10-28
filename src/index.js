// // data display - index.js

// // import the all needed modules
// import React from 'react';
// import ReactDOM from 'react-dom';

// // step -2 --> component initialization (class or function)
// function myfuntion(){
//   return `wellcome to my website -  from another funtion hi manikandan
//   testing the multi line string`;
// }


// const First = () => {
//   var message = {
//     text: 'welcome'
//   }
//   return(
// <div><h1 style= {{backgroundColor:'red', color:'white'}}> {message.text} </h1></div>  )
// }

// // step 3 --> data display - index.js
// ReactDOM.render(
//   <First />,
//   document.querySelector('#root')
//   )





// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



// ------------------------------------------------------------------------------------------------

import React from 'react';
import ReactDOM from 'react-dom';
import profile_1 from './images/profile_1.png'
import billi from './images/billi.png'
import putin from './images/profile_3.jpg'
import SingleComment from './SingleComment';
import UserCard  from './UserCard';

const First = () => {
  return(
    <div className='ui comments' id='root'>
      
      {/* <div className='comment'>
        <a href='/' className='avatar'><img src={profile_1} alt={profile_1} /></a>
        <div className='content'>
          <a href='/' className='author'>Riya </a>
          <div className='metadata'>
            <span className='date'>Today at 3 pm</span>
          </div>
          <div className='text'>Hi This is my first comment</div>
        </div>
      </div> */}
      <UserCard>
      <SingleComment name='Riya' time='3 pm' comment='Hi Guys!!' profile={profile_1}/></UserCard>
      <UserCard><SingleComment name='Billi Eilish' time='2 pm' comment='Hello All!! :-)' profile={billi} /></UserCard>
      <UserCard><SingleComment name='Putin' time='3 pm' comment='Hello All, Im going to launch the missile' profile={putin} /></UserCard>
    </div>
    // <div><h1 style= {{backgroundColor:'red', color:'white'}}> welcom </h1></div>  
  )
}

ReactDOM.render(<First />, document.querySelector('#root'))