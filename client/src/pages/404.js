import Link from 'next/link';

export default function Custom404() {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>404 - Page Not Found</h1>
            <p>Oops! The page you are looking for does not exist.</p>
            <Link href="/">
                <span style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>Go back home</span>
            </Link>
        </div>
    );
}