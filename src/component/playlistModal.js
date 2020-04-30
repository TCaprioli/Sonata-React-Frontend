import React from 'react'
import Modal from 'react-bootstrap/Modal'

class PlaylistModal extends React.Component{
  state={
    clicked:false,
    name:''
  }

  handleModal=()=>{
      this.setState({
          clicked: !this.state.clicked
      })
  }

  handleOnChange=(event)=>{
      this.setState({
          name: event.target.value
      })
  }

  playObj=()=>({
    name: this.state.name,
    user_id: 3
  })

  handleSubmit=(event)=>{
    event.preventDefault() 
    this.props.addPlaylist(this.playObj())
    this.handleModal() 
  }



  render(){
    return(
      <div> 
            
            Playlists<button type='button' className='btn btn-light btn-sm pl-btn' data-toggle="modal" data-target="#playlistModal" onClick={this.handleModal}>
                <div className='pl-btn-txt'>
                    +
                </div>
            </button>
            
        <Modal show={this.state.clicked} className='playlist-modal'>
            <Modal.Header style={{backgroundColor:'#FFC48C'}}>
            <Modal.Title>Create Playlist</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{backgroundColor:'#FFC48C'}}>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='name'>Name</label>
                        <input type='text' className='form-control' id='name' value={this.state.name} onChange={this.handleOnChange}/>
                    </div>
                    <div>
                        <button className='btn btn-primary'>Save</button>
                    </div>
                        
                </form>
            </Modal.Body>
            <Modal.Footer style={{backgroundColor:'#FFC48C'}}>
                <button onClick={this.handleModal}>
                    close
                </button>
            </Modal.Footer>
        </Modal>
            
          
       
      </div>
    )
  }
}

export default PlaylistModal