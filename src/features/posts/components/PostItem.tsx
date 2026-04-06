import '../components/postItem.css';
import { type Post } from '../../../shared/types/postsTypes.ts'
import {Fieldset} from "primereact/fieldset";
import CommentSection from "../../comments/CommentSection.tsx";

const PostItem = ({ post }: { post: Post }) => {
    return (
        <div className="post-chat-item">
            <div className="flex-container" style={{ display: 'flex', gap: '1rem' }}>

                {/* Левая часть */}
                <div className="post-user-info">
                    <i className="pi pi-user post-user-avatar"></i>
                    <span className="post-user-id">User #{post.userId}</span>
                    <span className="post-number">Post #{post.id}</span>
                </div>

                {/* Правая часть */}
                <div className="post-content">
                    <h3 className="post-title">{post.title}</h3>
                    <p className="post-body">{post.body}</p>
                </div>
            </div>
            {/* Кнопка в стиле Fieldset */}
            <Fieldset legend="Комментарии" toggleable collapsed={true}>
                <CommentSection postId={post.id} />
            </Fieldset>
        </div>
    );
};

export default PostItem;
