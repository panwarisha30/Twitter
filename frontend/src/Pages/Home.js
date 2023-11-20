import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Widgets from './Widgets/Widgets';
import Feed from './Feed/Feed';
const Home=() => {
    return(
        <div className='app'>
            <Sidebar />
           <Widgets />
           <Feed />
        </div>
    );
};
export default Home;

