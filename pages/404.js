import Link from 'next/link'
import { useEffect } from 'react';
import { useRouter } from 'next/router'
import style from '../styles/404.module.scss'

const NotFound = () => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            //router.back()
            router.replace('/')
        }, 5000);
    }, [])

    return (
        <main className={style.main}>
            <h1>Oooops.....</h1>
            <h1>404 / Page Not Found.</h1>
            <p>Go back to <Link href='/' className={style.link}>HomePage</Link>
            </p>
        </main>
    );
}

export default NotFound;