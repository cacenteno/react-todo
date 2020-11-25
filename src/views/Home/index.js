import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <React.Fragment>
            <div className="jumbotron">
                <h1 className="display-4">React App w/ Redux</h1>
                <p className="lead">This simple app showcases my fullstack capabilities</p>
                <hr className="my-4" />
            </div>
            <div className="text-center">
                <p>Click sign up to test app!</p>
                <p className="lead">
                    <Link className="btn btn-primary btn-lg" to="/signup">Sign Up</Link>
                </p>
                <hr className="my-4" />
            </div>
            <div className="row">
                <div className="col-sm">
                    <h2>Front End</h2>
                    <p>This app was created using react and redux.</p>
                    <span className="d-flex">
                        <p className="mr-2">Front End:</p>
                        <a href="https://github.com/cacenteno/react-todo/tree/master">Source</a>
                    </span>
                </div>
                <div className="col-sm">
                    <h2>Back End</h2>
                    <p>This app was created using react and redux.</p>
                    <span className="d-flex">
                        <p className="mr-2">Back End:</p>
                        <a href="https://github.com/ccent123/todo-react-w-auth">Source</a>
                    </span>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home
