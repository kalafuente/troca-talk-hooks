import { useEffect, useState } from 'react';
const PostList = () => {
    const [posts, setPosts] = useState<any[]>([])
    function getPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => setPosts(posts))
            .catch(err => console.log(err.message))
    }
    useEffect(() => {
        getPosts()
    }, [])
    return (
        <div style={{ width: "fit-content", textAlign: "left", margin: "auto" }}>
            <h2>Posts</h2>
            <ul>
                {posts.map(post => <li key={post.id}>{post.title}</li>)}
            </ul>
        </div>
    )
}
export default PostList