import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import sha1 from 'sha1'
import { APIManager } from '../../utils'

class CreatePost extends Component {

	constructor(){
		super()
		this.state = {
			post: {
				image: '',
				caption: ''
			}
		}
	}

	updatePost(event){
		event.preventDefault()
		let updated = Object.assign({}, this.state.post)
		updated[event.target.id] = event.target.value
		this.setState({
			post: updated
		})
	}

	submitPost(event){
		event.preventDefault()
//		console.log('subimtPost: '+JSON.stringify(this.state.post))

		if (this.state.post.image.length == 0){
			alert('Add an image.')
			return
		}

		if (this.state.post.caption.length == 0){
			alert('Add a caption.')
			return
		}

		let updated = Object.assign({}, this.state.post)
		this.props.onCreate(updated)
	}

	imageSelected(files){
		console.log('imageSelected: ')
		const image = files[0]

		const cloudName = 'djdnximeg'
		const url = 'https://api.cloudinary.com/v1_1/'+cloudName+'/image/upload'

		const timestamp = Date.now()/1000
		const uploadPreset = 'xztt5re5'

		const paramsStr = 'timestamp='+timestamp+'&upload_preset='+uploadPreset+''

		const signature = sha1(paramsStr)
		const params = {
			'api_key': '',
			'timestamp': timestamp,
			'upload_preset': uploadPreset,
			'signature': signature
		}

		APIManager.uploadFile(url, image, params)
		.then((uploaded) => {
			console.log('Upload Complete: '+JSON.stringify(uploaded))
			let updated = Object.assign({}, this.state.post)
			updated['image'] = uploaded['secure_url']
			this.setState({
				post: updated
			})


		})
		.catch((err) => {
			alert(err)
		})


	}

	render(){
		return (
			<div style={{background:'#fff'}}>
				<h2>Submit Post</h2>
				<input id="caption" onChange={this.updatePost.bind(this)} type="text" placeholder="Caption" />
				<div className="row">
					<div className="3u 12u$(small)">
						<Dropzone onDrop={this.imageSelected.bind(this)} style={{border:'none', marginTop:12}}>
							<button className="button special small">Add Image</button>
						</Dropzone>
					</div>
					<div className="3u 12u$(small)">
						<button className="button special small" style={{marginTop:12, marginLeft:12, width:90+'%'}} onClick={this.submitPost.bind(this)}>Submit</button>
					</div>
					<div className="6u 12u$(small)">
						<img style={{width:300, float:'right', marginTop:100, marginRight:100}} src={this.state.post.image} />
					</div>
				</div>

				<br /><br /><hr />
			</div>
		)
	}
}

export default CreatePost
