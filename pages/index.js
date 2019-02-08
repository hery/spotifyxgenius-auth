
import React from 'react'
import Head from 'next/head'

export default class extends React.Component {
    render () {
        return (
            <html>
            <Head>
                <title>spotifyxgenius - the missing lyrics window for spotify</title>
                <link href="https://fonts.googleapis.com/css?family=Merriweather|Open+Sans:400,700" rel="stylesheet" /> 
                <meta name="viewport" content="width=device-width, initial-scale=1" />

            </Head>
            <body>
                <div style={{
                    backgroundImage: 'url(/static/screenshot.jpg)',
                    backgroundSize: 'cover',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    height: '100vh',
                }}>
                    <div style={{
                        backgroundColor: 'white',
                        display: 'flex',
                        flexDirection: 'column',
                        padding: 30,
                        alignSelf: 'center',
                        borderRadius: 3,
                        boxShadow: `3px 3px 7px #424242aa`,
                        borderWidth: 0,
                        margin: 20,
                    }}>
                        <h2 style={{
                            fontFamily: "'Open Sans', sans-serif",
                            fontSize: 15,
                            fontWeight: 800,
                            textAlign: 'center',
                            letterSpacing: 0.5,
                            padding: 0, margin: 0
                        }}>spotifyxgenius</h2>
                        <p style={{
                            marginTop: 3,
                            marginBottom: 30,
                            textAlign: 'center',
                        }}>
                            the missing lyrics window for spotify
                        </p>
                        <p style={{
                            padding: 0, margin: 0,
                            textAlign: 'center',
                        }}>
                            automatically get lyrics from Genius for the currently playing song
                        </p>
                        <a style={{
                            textAlign: 'center',
                            margin: 20,
                        }} href="/static/spotifyxgenius.zip">Download v0.1 beta for macOS</a>
                        <p style={{ textAlign: 'center', fontSize: 10 }}>
                        this is a beta release to see if there is demand<br />
                        send feature requests to hery at ratsimihah dot com<br />
                        i can open source the code upon request<br />
                        please don't sue me about the name, i'm broke and can't afford court
                        </p>
                    </div>
                </div>
                
            </body>
            <style jsx>
                        {`
                            body {
                                font-family: 'Merriweather', serif;
                                font-size: 13px;
                                font-weight: 100;
                                margin: 0px;
                                padding: 0px;
                            }
                        `}
                    </style>
            </html>
        )
    }
}