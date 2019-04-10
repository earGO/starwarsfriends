import React from 'react';

const scrollStyle = {
    overflow:"scroll",
    height:"85vh",
    border:"1px solid black"
}

class Scroll extends React.Component {

    render() {
        return (
            <div style={scrollStyle}>
                {this.props.children}
            </div>

        )
    }
}

export default Scroll