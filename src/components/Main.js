import React from 'react';
import './Main.css';
import Empty from './Empty';
import ChatWindow from './ChatWindow';

const Main = ({user, activeUserId}) => {

    const renderMainContent = () => {
        if(!activeUserId) {
            return <Empty user={user} activateUserId={activeUserId}/>
        } else {
            return <ChatWindow activateUserId={activeUserId}/>
        }
    }

    return (
        <main className='Main'>{renderMainContent()}</main>
    );
}

export default Main;