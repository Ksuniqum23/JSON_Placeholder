import type {RootState} from "../../app/store.ts";
import {useSelector} from "react-redux";
import {useAppDispatch} from "../../app/hooks.ts";
import {fetchPosts} from "./postsSlice.ts";
import {useEffect} from "react";
import PostItem from "./components/PostItem.tsx";

const PostsList = () => {
    const { posts, loading, error } = useSelector((state: RootState) => state.posts);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);
    return (
        <div className="container">
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            {posts && posts.map((post) => (
                <PostItem key={post.id} post={post} />
            ))}
        </div>
    )
}

export default PostsList;
