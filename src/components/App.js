import React, {Component} from 'react'
import Login from './Login'
import Chat from './Chat'
import '../layout.css'

class App extends Component {

	state = {
		login: '',
	}

	render() {
		const {login, messages} = this.state
		return (
			<div>
				{!login && <Login setLogin={this.setLogin.bind(this)}/>}
				{login && <Chat login={login} signOut={this.signOut.bind(this)}/>}
			</div>
		)
	}

	setLogin(login) {
		this.setState({
			login: login
		})
	}

	signOut() {
		this.setState({
			login: false
		})
	}
}

export default App