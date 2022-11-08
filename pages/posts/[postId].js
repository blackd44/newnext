import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Post = ({ post = [], owner }) => {
    const router = useRouter()
    try {
        return (
            <>
                <main>
                    <h1>{post.title}</h1>
                    <p>By: <Link href={`/strikers/${owner.username}`}><em>{owner.username}</em></Link></p>
                    <div>
                        <pre>{post.body}</pre>
                    </div>
                </main>
            </>
        );
    }
    catch (e) {

        useEffect(() => {
            router.replace('/posts')
        }, [])
        return (
            <>
            </>
        );
    }
}

export default Post;

export const getServerSideProps = async (context) => {
    const { params } = context
    const { postId } = params
    const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    const post = await postResponse.json()

    if (post.id) {
        const ownerResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
        const owner = await ownerResponse.json()

        return {
            props: {
                post: post,
                owner: {
                    username: owner.username,
                    email: owner.email,
                    name: owner.name
                }
            }
        }
    }
    return {
        props: {}
    }
}