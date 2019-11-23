import React, {Component} from 'react';

import Notice from './Notice'

import './NoticeBoard.css';

class NoticeBoard extends Component
{
    render() {
        return(
            <div id="NoticeBoard-Main" className="NoticeBoard">

                <h1>
                    Notice Board
                </h1>

                <div className="Notices">

                    <Notice date="" title="" image="" />

                </div>
            </div>
        );
    }
}

export default NoticeBoard;