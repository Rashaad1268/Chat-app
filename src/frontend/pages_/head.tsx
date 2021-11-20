import Head from 'next/head'
import React from 'react'

export default function HeadTag(): React.ReactElement<any, any> {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <link rel="icon" href="/Ruby.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta
                name="description"
                content="Web site created using Ruby on Rails"
                />
                <link rel="apple-touch-icon" href="/Ruby.png" />
                <link rel="manifest" href="/manifest.json" />
                <title>Rails App</title>
            </Head>
        </>
    )
}