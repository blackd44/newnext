export const getStaticProps = async () => {

    //fetching data form api
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    return {
        props: { strikers: data }
    }
}

import Link from 'next/link'
import Head from 'next/head'
import style from '../../styles/team.module.scss'

const Strikers = ({ strikers }) => {
    return (
        <>
            <Head>
                <title>Team | Strikers</title>
            </Head>
            <main>
                <h1>Out Team</h1>
                {strikers.map(striker => (
                    <Link href={'/strikers/' + striker.id} key={striker.id} className={style.a}>
                        <div>
                            {striker.username}
                        </div>
                    </Link>
                ))}
            </main>
        </>
    );
}

export default Strikers;