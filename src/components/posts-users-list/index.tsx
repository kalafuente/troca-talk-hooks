import useFetch from "../custom-hooks/useFetch"

const PostsAndUserList = () => {
    const users = useFetch('https://jsonplaceholder.typicode.com/users', [])
    const posts = useFetch('https://jsonplaceholder.typicode.com/posts', [])
    return (
        <div style={{ width: "fit-content", textAlign: "left", margin: "auto" }}>
            <h2>Usuarios</h2>
            <ul>
                {users.data.map((user: any) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
            <h2>Posts</h2>
            <ul>
                {posts.data.map((posts: any) => (
                    <li key={posts.id}>{posts.title}</li>
                ))}
            </ul>
        </div>
    )
}
export default PostsAndUserList