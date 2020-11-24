//Higher Order Component (HOC)-
//A Component(hoc) that renders another component




import React from 'react';
import ReactDOM from 'react-dom';

const Info=(props)=>(
    <div>
        <h1>Info</h1>
        <p> The info is :{props.info}</p>
    </div>
);


const withAdminWarning=(WrappedComponent)=>{
    return (props)=>(
        <div>
            <p>This is Private Info</p>
            <WrappedComponent {...props}/>
        </div>
    );

};

const requireAuthentication=(WrappedComponent)=>{
    return (props)=>(
        <div>
        {props.isAuthenticated ?<WrappedComponent {...props} />:<p>You are Not Authenticated</p>}
        </div>

    );

};


const AdminInfo=withAdminWarning(Info);
const AuthInfo=requireAuthentication(Info);






//ReactDOM.render(<AdminInfo info='Details are'/>,document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info='Details are'/>,document.getElementById('app'));
