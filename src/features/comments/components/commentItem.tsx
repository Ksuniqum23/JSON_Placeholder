import './commentItem.css';
import { type Comment } from "../../../shared/types/commentsTypes.ts";

const CommentItem = ({ comment }: { comment: Comment}) => {
    // const formatEmail = (email) => {
    //     const [name, domain] = email.split('@');
    //     const maskedName = name.slice(0, 2) + '***' + name.slice(-1);
    //     return `${maskedName}@${domain}`;
    // };

    return (
        <div className="comment-chat-item">
            <div className="flex-container" style={{ display: 'flex', gap: '1rem' }}>

                {/* Левая часть - аватар и почта под ним */}
                <div className="comment-user-info">
                    <div className="comment-user-avatar">
                        {comment.email.charAt(0).toUpperCase()}
                    </div>
                    <a href={`mailto:${comment.email}`} className="comment-user-email">
                        {comment.email}
                    </a>
                </div>

                {/* Правая часть - жирный заголовок и текст */}
                <div className="comment-content">
                    <div className="comment-header-row">
                        <h3 className="comment-name">{comment.name}</h3>
                        <span className="comment-id">#{comment.id}</span>
                    </div>
                    <p className="comment-body">{comment.body}</p>
                    <div className="comment-footer">
                        <button className="comment-reply-btn">
                            <span>💬</span> Ответить
                        </button>
                        <button className="comment-like-btn">
                            <span>❤️</span> Нравится
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CommentItem;
