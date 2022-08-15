import React from "react";
import { render } from "react-dom";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id: 1,
        message: "안녕하세요, 오늘 일정 입니다."
    },
    {
        id: 2,
        message: "점심식사 시간입니다."
    },
    {
        id: 3,
        message: "이제 곧 미팅이 시작됩니다."
    },
];

var timer;

class NotificationList extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            notifications: [],
        };
    }

    componentDidMount() {
        const {notifications} = this.state;
        timer = setInterval(() => {
            if (notifications.length < reservedNotifications.length){
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({      //setState 함수 사용해서 상태 수정
                    notification: notifications,
                });
            }
            else {
                this.setState({
                    notifications: []
                })
                clearInterval(timer);
            }
        }, 1000);
    }
    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return <Notification key={notification.id} id={notification.id} message={notification.message} />;
                })}
            </div>
        );
    }
}

export default NotificationList;