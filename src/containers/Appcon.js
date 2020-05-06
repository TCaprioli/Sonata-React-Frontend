import React from 'react'
import SongCon from './Songcon'
import PlayerCon from './Playercon'
import PlaylistCon from './Playlistcon'


class AppCon extends React.Component{
  state={
    currentSong:{},
    currentPlaylist:{},
    songs:[],
    user:{
        id:0,
        playlists:[]
    }
  }

  async componentDidMount(){
      let songResp = await fetch('https://sonata-api.herokuapp.com/songs',{
          method:'GET',
          headers:{'Content-Type':'application/json'}
      })
      let songArray = await songResp.json()
      this.setState({
          songs:songArray
      })

      let userResp = await fetch('https://sonata-api.herokuapp.com/users',{
          method:'GET',
          headers:{'Content-Type':'application/json'}
      })

      let userData = await userResp.json()
      this.setState({
          user:userData[0]
      })

  }

  selectSong=(song)=>{
    this.setState({
        currentSong:song
    })
  }

  addPlaylist=async (playlistObj)=>{
    let resp= await fetch('https://sonata-api.herokuapp.com/playlists',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(playlistObj)
    })

    let data = await resp.json()
    this.setState({
        user:{playlists:[...this.state.user.playlists, data]}
    })

  }

  removePlaylist=async (id)=>{
      let updatedArray = this.state.user.playlists.filter(playlist => playlist.id !== id)
      this.setState({
          user:{playlists:[...updatedArray]}
      })
    let resp = await fetch(`https://sonata-api.herokuapp.com/playlists/${id}`,{
        method:'DELETE'
    })
  }

  addPlaySong=async (playSongObj)=>{
    let resp = await fetch('https://sonata-api.herokuapp.com/playlist_songs',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(playSongObj)
    })
    let data = await resp.json()
    let updatedArray = this.state.user.playlists.map(playlist => {
        if(playlist.id === data.playlist_id){
            return {...playlist, songs:[...playlist.songs, data.song]}
        }
        else{
            return playlist
        }
    })
    if(this.state.currentPlaylist.songs){
    this.setState({
        user:{
            playlists:updatedArray
        },
        currentPlaylist:{
            id:this.state.currentPlaylist.id,
            name:this.state.currentPlaylist.name,
            songs:[...this.state.currentPlaylist.songs, data.song]
        }
    })
    alert(`${data.song.name} has been added to your playlist`)
    }
    else{
        alert('open your playlist to add a song')
    }
  }


  addCurrentPlaylist=(playlist)=>{
    this.setState({
        currentPlaylist:playlist
    })
  }


  removeCurrentPlaylist=()=>{
      this.setState({
          currentPlaylist:{}
      })
  }

  render(){
      console.log(this.state)
    return(
      <div className='container-fluid'>
        <div className="row">
            <div className="col-sm">
            <SongCon songs={this.state.songs} selectSong={this.selectSong}/>
            </div>

            <div className="col-sm">
            <PlayerCon currentSong={this.state.currentSong} playlists={this.state.user.playlists} addPlaySong={this.addPlaySong}/>
            </div>

            <div className="col-sm">
            <PlaylistCon playlists={this.state.user.playlists} addPlaylist={this.addPlaylist} 
            removePlaylist={this.removePlaylist} selectSong={this.selectSong} newSong={this.state.newSong} 
            addCurrentPlaylist={this.addCurrentPlaylist} currentPlaylist={this.state.currentPlaylist} removeCurrentPlaylist={this.removeCurrentPlaylist}/>
            </div>
        </div>
          
       
      </div>
    )
  }
}

export default AppCon