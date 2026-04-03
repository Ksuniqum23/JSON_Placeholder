import type {RootState} from "../../app/store.ts";
import {useSelector} from "react-redux";
import {useAppDispatch} from "../../app/hooks.ts";
import {fetchPosts} from "./postsSlice.ts";
import {useEffect} from "react";

const PostsList = () => {
    const { posts, loading, error } = useSelector((state: RootState) => state.posts);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);
    return (
        <div className="container">
            <h2 className="title">Posts</h2>
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            {posts && posts.map((post) => (
                <div key={post.id} className="posts-list">
                    <h3>{post.title}</h3>
                    <small>User #{post.userId} | Post #{post.id}</small>
                    <p>{post.body}</p>
                    <hr />
                </div>
            ))}
        </div>
    )
}

export default PostsList;
