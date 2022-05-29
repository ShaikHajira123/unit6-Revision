

import React , { useState } from 'react'
export const Comment = ({data}) => {
    const [comment ,setComment] =useState(false)

    if(data.replies) {
        return(
            <div className='main'>
                <div className='up'>
                    <div className='comment'>
                        <span onClick={()=>setComment(!comment)}
                        style={{ cursor: "pointer", fontWeight: "bold" }}
                        >
                        {comment?'hide' : 'show'}
                        </span>
                        <div>{data.author}</div>
                        <div>{data.points} points</div>
                        <div>{data.timestamp.split(' ').splice(4,1)}</div>
                    </div>
                    <div>
                        {data.body}
                        <br />
                    </div>
                </div>
                <div style={{ display: comment==false ? "block" : "none", paddingLeft: "5%" }}>
                    {data.replies.map((e)=> {
                       return <Comment data={e} />
                    })}
                </div>
            </div>
        )

    
    }else{
        return (
            <div className="up" style={{ paddingLeft: "5px" }}>
                <div className='comment'>
                    <div>{data.author}</div>
                    <div>{data.points} points</div>
                    <div>{data.timestamp.split(' ').splice(4,1)}</div>
                </div>
                <div>
                    {data.body}
                    <br />
                </div>
            </div>
        )
    }
}

