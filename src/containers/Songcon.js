import React from 'react'
import Song from '../component/song'


class SongCon extends React.Component{
  state={

  }



  mapSongs=()=>{
    let {songs} = this.props
    let songArray = songs.map(song => {
        return <Song key={song.id} songData={song} selectSong={this.props.selectSong}/>
    })

    return songArray
  }

  render(){
    return(
      <div className='mh-100'>
          <div className='mediacon songcon'>
              <div className='con-title'>
                Songs
              </div>
            
            <hr/>
            {this.mapSongs()}
          </div>
       
      </div>
    )
  }
}

export default SongCon