export const getStaticPaths = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    const paths = data.map(striker => {
        return {
            params: { id: striker.id.toString() }
        }
    })
    return {
        paths,
        fallback: false
    };
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    const data = await res.json()

    return {
        props: { striker: data }
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