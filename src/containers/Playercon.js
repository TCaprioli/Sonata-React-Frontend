import React from 'react'
import {Dropdown,DropdownButton} from 'react-bootstrap'


class PlayerCon extends React.Component{
   state={
       playlistId:0
   }

    mapOptions=()=>{
        let {playlists} = this.props
        return playlists.map(playlist=> <option key={playlist.id} value={playlist.id}>{playlist.name}</option>)
    }

    handleOnChange=(event)=>{
        if(event.target.value !== 'Select Playlist')
        this.setState({
            playlistId:Number(event.target.value)
        })
    }

    playSongObj=()=>({
        playlist_id: this.state.playlistId,
        song_id: this.props.currentSong.id
    })

    handleSubmit=(event)=>{
        event.preventDefault()
        this.props.addPlaySong(this.playSongObj())
    }
    

  render(){
    return(
      <div>
          <div>
              {
                  this.props.currentSong.mp3 === undefined?
                  <img className='playercon' alt=''/>
                  :
                  <img  className='playercon' src={require(`../songData/jpg/${this.props.currentSong.cover_art}`)} alt={this.props.currentSong.name}/>
              }

          </div>
            

          
          <div >
            {this.props.currentSong.name === undefined? 
            <div className='player-info'>
                Please select a song
            </div>
            :
            <div className='player-info'>
                <h4>{this.props.currentSong.artist.name}</h4>
                <h3 className='btn-group'>{this.props.currentSong.name}
                <Dropdown>
                    <DropdownButton drop='up' bsPrefix='like-btn' title={<img src={require('../songData/jpg/like.png')}/>}>
                    <form className='like-form' onSubmit={this.handleSubmit}>
                        <div className='form-group'>
                            Add Song to Playlist
                        </div>
                        <div className='form-group'>
                            <select onChange={this.handleOnChange}>
                                <option>Select Playlist</option>
                                {this.mapOptions()}
                            </select>
                        </div>
                        <button className='btn btn-primary'>like dat</button>
                    </form>
                    </DropdownButton>
                </Dropdown>
                    
                    
                </h3> 
            </div>
            }
          </div>
          {
              this.props.currentSong.mp3 === undefined?
                <audio className='audio' controls/>
              :
                <audio className='audio' controls autoPlay src={require(`../songData/mp3/${this.props.currentSong.mp3}`)}/>
          }
          
       
      </div>
    )
  }
}

export default PlayerCon