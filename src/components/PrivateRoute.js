import { Redirect, Route } from "react-router-dom";

const PrivateRoute = (props) => {
    return (
        <Route path={props.path} render={data=>{
        props.token ? (<props.component {...data} token={props.token}></props.component>):
        (<Redirect to="/login" />)
        }}/>
    );
}
 
export default PrivateRoute;