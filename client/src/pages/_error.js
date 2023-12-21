import React from 'react';
import Link from 'next/link';

class Error extends React.Component {
    static getInitialProps({ res, err }) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
        return { statusCode };
    }

    render() {
        const { statusCode } = this.props;
        return (
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h1>Error: {statusCode}</h1>
                <p>
                    {statusCode === 404
                        ? 'The page you are looking for was not found.'
                        : 'An unexpected error has occurred.'}
                </p>
                <p>
                    <Link href="/">
                        <a>Go back home</a>
                    </Link>
                </p>
                <p>
                    <button onClick={() => window.location.reload()}>
                        Refresh Page
                    </button>
                </p>
            </div>
        );
    }
}

export default Error;