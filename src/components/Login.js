import React, {Component} from 'react'
import '../login.css'

class Login extends Component {

	state = {
		login: '',
	}

	render() {
		return (
			<div className='background'>
				<div className='container'>
					<div className='login__top'>
						<div className='login__text'>Chat</div>
						<div className='login__icon'>
							<div className='icon__line-top'></div>
							<div className='icon__line-bottom'></div>
							<div className='icon__triangle'></div>
						</div>
					</div>
					<div className='login__bottom'>
						<form className='login__form' 
							  onSubmit={this.handleSubmit}>
							<div className='login__form-wrapper'>
								<div className='login__form-input-title'>USERNAME</div>
								<input type='text' 
									   className='login__form-input-text' 
									   onChange={(e)=> this.handleChange(e.target.value)}/>
								<div className='login__form-input-title margin'>PASSWORD</div>
								<input type='password' className='login__form-input-text'/>
							</div>
							<div className='login__submit_wrapper'>
								<input type='submit' className='login__form-input-submit' value='Get Started'/>
								<div className='login__submit-triangle'></div>
							</div>
						</form>
					</div>
					<div className='login__footer'>Not registered? <a href='#' className='login__footer-link'>Create Account</a></div>
				</div>
			</div>
		)
	}

	handleChange(login) {
		this.setState({
			login: login
		})
	}

	handleSubmit = (event) => {
		event.preventDefault()
		this.props.setLogin(this.state.login)
	}
}

export default Login