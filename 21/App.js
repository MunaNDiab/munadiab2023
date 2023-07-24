import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    handleClick = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }));
    };

    render() {
        if (this.state.count === 2) {
            // Simulate an error when count reaches 2
            throw new Error('Crashed!');
        }

        return (
            <div>
                <button onClick={this.handleClick}>
                    ({this.state.count})
                </button>
            </div>
        );
    }
}

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return <p> <h2>Something Went Wrong.</h2><br />
                Details<br />
                Error: I Crashed! <br /><br />
                in BuggyCounter (created by App)<br />
                in ErrorBoundary (created by App)<br />
                in div (created by App)<br />
                in App
            </p>;
        }

        return this.props.children;
    }
}

function App() {
    return (
        <div className="App">
            <h1>Error Boundary Sample</h1><hr />


            <ErrorBoundary>
                <div>
                    <p style={{ fontWeight: 'bold' }}>These two counters are inside the same error boundary. If one crashes,<br /> the error boundary will replace both of them.</p>
                    <Counter />
                    <Counter />
                </div>
            </ErrorBoundary> <hr />
            <ErrorBoundary>
                <div>
                    <p style={{ fontWeight: 'bold' }}>These two counters are each inside of their own error boundary.So if<br /> one crashes,the other is not affected.</p>
                    <Counter />
                </div>
            </ErrorBoundary>
            <ErrorBoundary>
                <div>
                    <Counter />
                </div>
            </ErrorBoundary><hr />
        </div>
    );
}

export default App;