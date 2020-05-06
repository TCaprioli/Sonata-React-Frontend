import React from 'react'
import PlaylistModal from '../component/playlistModal'
import Playlist from '../component/playlist'
import CurrentPlaylist from './CurrentPlaylist'

class PlaylistCon extends React.Component{

  addCurrentPlaylist=(playlist)=>{
    this.setState({
        currentPlaylist:playlist
    })
  }

  handleOnClick=()=>{
    this.props.removeCurrentPlaylist()
  }


  mapPlaylists=()=>{
    let {playlists} = this.props
    return playlists.map(playlist =>  <Playlist key={playlist.id} playlistData={playlist} removePlaylist={this.props.removePlaylist} addCurrentPlaylist={this.props.addCurrentPlaylist}/>)
  }
  

  existingPlaylist=()=>{
    if(Object.keys(this.props.currentPlaylist).length === 0){
      return false
    }
    else{
      return true
    }
  }

  render(){
    console.log(this.existingPlaylist())
    return(
      <div>
          {
            this.existingPlaylist() === false?
              <div className='mediacon playlistcon'>
                <div className='con-title'>
                    <PlaylistModal  addPlaylist={this.props.addPlaylist}/>
                </div>
            <hr/>
            {this.mapPlaylists()}
          </div>
          :
          <CurrentPlaylist currentPlaylist={this.props.currentPlaylist} home={this.handleOnClick}/>
          }
       
      </div>
    )
  }
}

export default PlaylistCon