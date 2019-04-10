import React from 'react';


const initialState = {
    hasError:false
}


class ErrorBoundry extends React.Component {
    constructor(props) {
        super(props)
        this.state = initialState;
    }

    componentDidCatch(error, info) {
        // You can also log the error to an error reporting service
        this.setState({
            hasError:true
        })
    }


    render() {
            if (this.state.hasError) {
                // You can render any custom fallback UI
                return <h1>Something went wrong.</h1>;
            } else {
                return this.props.children;
            }


    }
}

export default ErrorBoundry