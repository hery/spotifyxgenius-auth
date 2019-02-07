
import React from 'react'

const GENIUS_AUTH_URL = 'https://api.genius.com/oauth/authorize'
const CLIENT_SECRET = '90jXvFXQfQHbHIfdBFlft8A15TSYpoJ7ls2Vf1hBVRMQNIVu8BbFdTcdDAxygxhcKU5nLXn403ay6f_2NFqd6A'
const TOKEN_URL = 'https://api.genius.com/oauth/token'
const REDIRECT_URI = 'http://spotifyxgenius.now.sh/auth'
const API_CLIENT_ID = 'wJ_3irgwB7B09JpqCwF-mZD4niYiJcxEtJprT5o3RvrzLk6vlSQ4qaHJmhyXWeOY'

class Auth extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            code: '',
            state: '',
            token: ''
        }
    }

    componentDidMount () {
        const { query } = this.props
        if (query) {
            this.setState({
                code: query.code,
                state: query.state
            })
        }
    }

    componentDidUpdate (prevProps, prevState, snapshot) {
        if (this.state.code && this.state.code != prevState.code) {
            this.tokenRequest()
        }
    }

    tokenRequest () {
        const data = {
            code: this.state.code,
            client_secret: CLIENT_SECRET,
            grant_type: 'authorization_code',
            redirect_uri: REDIRECT_URI,
            response_type: 'code',
            client_id: API_CLIENT_ID
        }
        return fetch(TOKEN_URL, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            // mode: "cors", // no-cors, cors, *same-origin
            // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            // credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            // redirect: "follow", // manual, *follow, error
            // referrer: "no-referrer", // no-referrer, *client
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        })
        .then(response => response.json())
        .then(json => {
            console.debug(json)
            if ('access_token' in json) {
                this.setState({
                    token: json.access_token
                })
            }
        })
    }

    render () {
        return (
            <div>
                <p>meow.</p>
                <p>{ this.state.code || 'no code' }</p>
                <p>{ this.state.state || 'no state' }</p>
                <p>{ this.state.token || 'no token' }</p>
            </div>
        )
    }
}

Auth.getInitialProps = async ({ query }) => {
    return { query: query }
  }

export default Auth