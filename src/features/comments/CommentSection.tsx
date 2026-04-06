import { useAppDispatch } from "../../app/hooks.ts";
import { fetchComments } from "./commentsSlice.ts";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store.ts";
import CommentItem from "./components/commentItem.tsx";

const CommentSection = ({ postId }: { postId: number }) => {
    const { comments, loading, error } = useSelector((state: RootState) => state.comments);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchComments(postId));
    }, [dispatch, postId])
    return (
        <div className="comment-section">
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            {comments && comments.map((comment) => (
                <CommentItem key={comment.id} comment={comment} />
            ))}
        </div>
    )
}

export default CommentSection;
