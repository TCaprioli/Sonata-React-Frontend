import React from 'react'

const playlist=(props)=>{

    let handleDelete=()=>{
        props.removePlaylist(props.playlistData.id)
    }

    let handleSelection=(event)=>{
        console.log(event.target.innerText)
        if(event.target.innerText !== 'x'){
           props.addCurrentPlaylist(props.playlistData) 
        }
    }

    return(
        <div className='song-selection' onClick={handleSelection}>
            {props.playlistData.name}
            <button className='btn btn-light btn-sm pl-btn' onClick={handleDelete}>
                 <div className='pl-btn-txt'>x</div>
            </button>
        </div>
    )
}

export default playlist