import type {RootState} from "../../app/store.ts";
import {useSelector} from "react-redux";
import {useAppDispatch} from "../../app/hooks.ts";
import {fetchLimitPosts} from "./postsSlice.ts";
import {useEffect, useState} from "react";
import PostItem from "./components/PostItem.tsx";
import {Paginator, type PaginatorPageChangeEvent} from "primereact/paginator";

const PostsList = () => {
    const { posts, loading, error, totalCount } = useSelector((state: RootState) => state.posts);
    const dispatch = useAppDispatch();

    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);

    useEffect(() => {
        const page = first / rows + 1;
        dispatch(fetchLimitPosts({ page, limit: rows }));
    }, [dispatch, first, rows]);

    const onPageChange = (event: PaginatorPageChangeEvent) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    return (
        <div className="container">
            <Paginator
                first={first}
                rows={rows}
                totalRecords={totalCount || 0}
                rowsPerPageOptions={[5, 10, 20, 50]}
                onPageChange={onPageChange}
            />
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            {posts && posts.map((post) => (
                <PostItem key={post.id} post={post} />
            ))}
        </div>
    )
}

export default PostsList;
