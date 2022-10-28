import React from "react";
import profile_1 from './images/profile_1.png'

const SingleComment = (props) => {
    return(
    <div className='comment'>
        <a href='/' className='avatar'><img src={props.profile} alt={profile_1} /></a>
        <div className='content'>
            <a href='/' className='author'>{props.name}</a>
            <div className='metadata'>
                <span className='date'>{props.time}</span>
            </div>
          <div className='text'>{props.comment}</div>
        </div>
    </div>

    )
}


// when you creating a new file have to export the file to access from another file
export default SingleComment;