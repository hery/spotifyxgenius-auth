
import React from 'react'

class Auth extends React.Component {
    render () {
        const { query } = this.props
        return <p>meow.</p>
    }
}

Auth.getInitialProps = async ({ query }) => {
    console.debug(query)
    return { query: query }
  }

export default Auth