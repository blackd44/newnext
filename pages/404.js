import Link from 'next/link'

const NotFound = () => {
    let style = {
        textAlign: 'center'
    }
    let link = {
        color: '#f90',
    }
    return (
        <main style={style}>
            <h1>Oooops.....</h1>
            <h1>404 / Page Not Found.</h1>
            <p>Go back to <Link href='/' style={link}>HomePage</Link>
            </p>
        </main>
    );
}

export default NotFound;