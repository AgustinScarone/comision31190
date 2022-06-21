import { useState, createContext, useContext } from "react";

const Notification = ({ message, severity }) => {

    const notificationStyles = {
        position: 'absolute',
        top: 100,
        right: 5,
        width: 'auto',
        height: 'auto',
        backgroundColor: severity === 'error' ? '#E23744' : '#95C11F',
        padding: '10px 20px',
        color: '#fff',
        borderRadius: 3
    }

    if(message === '') {
        return 
    }

    return (
        <div style={notificationStyles}>
        { message }
        </div>
    )
}

const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
    const [message, setMessage] = useState('')
    const [severity, setSeverity] = useState('success')

    const setNotification = (severity, message) => {
        setMessage(message)
        setSeverity(severity)
        setTimeout(() => {
            setMessage('')
        }, 3000)
    }   

    return (
        <NotificationContext.Provider value={{ setNotification }}>
            <Notification message={message} severity={severity}/>
            { children }
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    return useContext(NotificationContext)
}