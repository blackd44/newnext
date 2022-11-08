import { useRouter } from "next/router"

export const getServerSideProps = async (context) => {

    const { params } = context
    const { username } = params
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/?username=${username}`)
    const data = await res.json()

    return {
        props: { striker: data[0] }
    }
}

const User = ({ striker }) => {

    return (
        <>
            <main>
                <h1>{striker.name}</h1>
                <p>{striker.username}</p>
                <p>{striker.email}</p>
                <p>{striker.website}</p>
            </main>
        </>
    );
}

export default User;