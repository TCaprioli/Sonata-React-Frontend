import React from 'react'

const song=(props)=>{
    let handleOnClick=()=>{
        props.selectSong(props.songData)
    }
    return(
        <div className='song-selection' onClick={handleOnClick}>
            {props.songData.name}
        </div>
    )
}

export default song