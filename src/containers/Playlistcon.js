import React from 'react'
import PlaylistModal from '../component/playlistModal'
import Playlist from '../component/playlist'
import Song from '../component/song'
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

  mapSongs=()=>{
      let {currentPlaylist} = this.props
      return currentPlaylist.songs.map(song => <Song key={song.id} songData={song} selectSong={this.props.selectSong}/>)

  }

  render(){
      console.log(this.props.playlists)
    return(
      <div>
          {
            Object.keys(this.props.currentPlaylist).length === 1?
              <div className='mediacon playlistcon'>
                <div className='con-title'>
                    <PlaylistModal  addPlaylist={this.props.addPlaylist}/>
                </div>
            <hr/>
            {this.mapPlaylists()}
          </div>
          :
          <div className='mediacon playlistcon'>
                <div className='con-title'>
                    {this.props.currentPlaylist.name}
                    <button className='btn btn-light btn-sm pl-btn'onClick={this.handleOnClick}>
                        <img className='pl-btn-txt2'src={require(`../songData/jpg/home.png`)} />
                    </button>
                </div>
            <hr/>
            {this.mapSongs()}
          </div>
          }
       
      </div>
    )
  }
}

export default PlaylistCon