import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login.js'



class Main extends React.Component{
    render(){
        return (
            <Login></Login>
        );
    }
}

    ReactDOM.render(
    <Main />,
    document.getElementById('root')
    );
