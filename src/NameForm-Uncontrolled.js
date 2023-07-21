import React from 'react';

class NameFormUncontrolled extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.input = React.createRef();
        this.state = React.createRef();
    }

    handleSubmit(event) {
        alert('Uncontrolled:Password: ' + this.input.current.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" ref={this.input} />
                    password:
                    <input type="password" ref={this.input} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default NameFormUncontrolled;