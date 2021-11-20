import React from 'react'
import type { NextPage, InferGetServerSidePropsType, GetServerSideProps } from 'next'
import HeadTag from '../../pages_/head'
import Ext from '../../pages_/mainComponent'
import ApiURL from '../../pages_/api'
// import SocketIOClient from "socket.io-client"

interface Msg {
    user: string;
    msg: string;
    time: string;
}

const Me: NextPage = ({ token }: InferGetServerSidePropsType<typeof getServerSideProps>): React.ReactElement<any, any> => {
    const accessToken = token;
    const [connected, setConnected] = React.useState<boolean>(false);
    const [chat, setChat] = React.useState<Msg[]>([]);
    // https://codesandbox.io/s/piffv
    // React.useEffect((): any => {
    //     const socket = (SocketIOClient as any).connect(process.env.BASE_URL, {
    //         path: "/api/socketio",
    //     });
    //     socket.on("connect", () => {
    //         console.log("SOCKET CONNECTED!", socket.id);
    //         setConnected(true);
    //     });
    
    //     socket.on("message", (message: any) => {
    //         chat.push(message);
    //         setChat([...chat]);
    //     });
    
    //     if (socket) return () => socket.disconnect();
    // }, []);
    React.useEffect((): any => {
        fetch("http://localhost:3000/api/socketio")
        const socket = new WebSocket(process.env.BASE_URL || "ws://localhost:3000" + "/api/socketio");
        socket.onopen = (e) => {
            console.log("SOCKET CONNECTED!");
            setConnected(true);
            socket.send(JSON.stringify({loaded: true}));
        }
        socket.onmessage = (e) => {
            const message = JSON.parse(e.data);
            chat.push(message);
            setChat([...chat]);
        }
        socket.onerror = (e) => {
            console.log("SOCKET ERROR!", e);
        }
    }, []);
    return (
        <div className='App'>
        <HeadTag />
        <Ext nav={false} layout={(): React.ReactElement<any, any> => {
            return (
                <>
                </>
            )
        }} />
        </div>
    )
}

export default Me;

export const getServerSideProps: GetServerSideProps = async (context: any) => {
    if (context.req.cookies?.token) {
        return {
            props: {
                token: context.req.cookies.token
            }
        }
    } else {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }
}