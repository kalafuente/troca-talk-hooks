import { useEffect, useState } from 'react';
const PostsAndUserList = () => {
    const [posts, setPosts] = useState<any[]>([])
    const [users, setUsers] = useState<any[]>([])
    function getPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => setPosts(posts))
            .catch(err => console.log(err.message))
    }
    function getUsers() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setUsers(users))
            .catch(err => console.log(err.message))
    }
    useEffect(() => {
        getPosts()
        getUsers()
    }, [])
    return (
        <>
            <h2>Posts</h2>
            <ul>
                {posts.map(post => <li key={post.id}>{post.title}</li>)}
            </ul>
            <h2>Usuarios</h2>
            <ul>
                {users.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </>
    )
}

export default PostsAndUserList
