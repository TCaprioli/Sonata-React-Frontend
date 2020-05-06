import React from 'react'
import Song from '../component/song'
class CurrentPlaylist extends React.Component{

  mapSongs=()=>{
      let {currentPlaylist} = this.props
      return currentPlaylist.songs.map(song => <Song key={song.id} songData={song} selectSong={this.props.selectSong}/>)
     
  }

  render(){
    return(
    <div className='mediacon playlistcon'>
                <div className='con-title'>
                    {this.props.currentPlaylist.name}
                    <button className='btn btn-light btn-sm pl-btn'onClick={this.props.home}>
                        <img className='pl-btn-txt2'src={require(`../songData/jpg/home.png`)} />
                    </button>
                </div>
            <hr/>
            {this.mapSongs()}
    </div>

    )
  }
}

export default CurrentPlaylist