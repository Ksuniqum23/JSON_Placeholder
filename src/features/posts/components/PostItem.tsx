import React from 'react';
import '../components/postItem.css';

const PostItem = ({ post }) => {
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
        </div>
    );
};

export default PostItem;
