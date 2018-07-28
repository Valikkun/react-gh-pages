import React, {Component} from 'react'
import '../chat.css'


class Chat extends Component {

	state = {
		messages: [{sender: 'Michael', text: 'Hi Andrea! How are you?'}, 
				   {sender: 'Nataly', text: 'Doing good, how do you feel about grabbing a coffee sometime?'}],
		text: '',				   
	}

	render() {
		const {login, signOut} = this.props
		const messages = this.state.messages
		return (
			<div className='background'>
				<div className='container'>
					<div className='chat__header'>
						<button className='chat__header-signout'
								onClick={signOut}
								>SIGNOUT
						</button>
						Тестовое задание
					</div>
					<div className={messages.length > 4 ? 'chat__window overflow' : 'chat__window'} 
						 ref={(div) => this.chatWindow = div}>
						{messages.map((message, index) =>
							<div key={index} className='clearfix'>
								<div className={index%2 === 0 ? 'chat__message' : 'chat__message right'}>
									<p className='chat__message-text'>{message.text}</p>
									<p className='chat__message-sender'>
										{message.sender}
									</p>
								</div>
							</div>
						)}	
					</div>
					<form className='chat__form'
						  onSubmit={this.handleSubmit}
						  >
						<div className='chat__form-icon'></div>
						<input type='text' 
							   placeholder='Type message...' 
							   className='chat__form-input-text'
							   onChange={(e)=>this.handleChange(e.target.value)}
							   value={this.state.text}
							   />
						<input type='submit' 
							   className='chat__form-submit'
							   value=''
							   />		
					</form>
				</div>
			</div>
		)
	}

	handleChange = (text) => {
		this.setState({
			text: text
		})
	}

	handleSubmit = (event) => {
		event.preventDefault()
		if (!this.state.text) return 
		const messages = this.state.messages
		const messagesCopy = messages.slice()
		messagesCopy.push({sender: this.props.login || 'NoName', text: this.state.text})
		this.setState({
			messages: messagesCopy,
			text: '',
		})
		if (messagesCopy.length < 4) return 
		const interval = setInterval(()=>{this.chatWindow.scrollTop += 1}, 0)
		setTimeout(()=>clearInterval(interval), 500)
	}
}

export default Chat