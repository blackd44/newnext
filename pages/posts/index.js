import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import style from "../../styles/post.module.scss"

export const getServerSideProps = async () => {

    const res = await fetch('http://localhost:4000/api/posts')
    const data = await res.json()

    return {
        props: { posts: data }
    }
}

const Posts = ({ posts }) => {
    //posts.sort((a, b) => b.id - a.id)
    const router = useRouter()
    return (
        <>
            <Head>
                <title>Posts | Strikers</title>
            </Head>
            <main>
                <h1>Posts</h1>
                <main>
                    {
                        posts.map(post => (
                            <Link href={`${router.pathname}/${post.id}`} key={`${post.id}`} className={style.a_item}>
                                <div>
                                    <h3>{post.title}</h3>
                                    <p>{post.body}</p>
                                </div>
                            </Link>
                        ))
                    }
                </main>
            </main>
        </>
    );
}

export default Posts;