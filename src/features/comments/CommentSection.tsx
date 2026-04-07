import "../../shared/components/BtnLoadMore.css";
import { useAppDispatch } from "../../app/hooks.ts";
import { fetchLimitComments } from "./commentsSlice.ts";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store.ts";
import CommentItem from "./components/commentItem.tsx";

const CommentSection = ({ postId }: { postId: number }) => {
    const { byPostId, loading, error, totalCount } = useSelector((state: RootState) => state.comments);
    const limit = 2;
    const initialPage = Math.max(1, Math.ceil((byPostId[postId]?.length || 0) / limit));
    const [page, setPage] = useState(initialPage);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (byPostId[postId]?.length === 0 || !byPostId[postId]) {
            dispatch(fetchLimitComments({ postId, page: 1, limit }));
        }
    }, [dispatch, postId]);

    const loadMore = () => {
        const nextPage = page + 1;
        setPage(nextPage);
        dispatch(fetchLimitComments({ postId, page: nextPage, limit }));
    }

    const comments = byPostId[postId] || [];
    const isLoading = loading[postId] || false;
    const errorMsg = error[postId] || null;
    const total = totalCount[postId] || 0;
    const hasMore = comments.length < total;

    return (
        <div className="comment-section">
            {isLoading && page === 1 && <div>Loading...</div>}
            {errorMsg && <div>Error: {errorMsg}</div>}
            {comments.map((comment) => (
                <CommentItem key={comment.id} comment={comment} />
            ))}
            {hasMore && !isLoading && (
                <button className="load-more-btn" onClick={loadMore}>Загрузить больше</button>
            )}
            {isLoading && page > 1 && <div>Loading more...</div>}
        </div>
    )
}

export default CommentSection;
