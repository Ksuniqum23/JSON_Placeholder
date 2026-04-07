import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import "../components/userCard.css";
import type { User } from '../../../shared/types/usersTypes.ts';

interface UserCardProps {
    user: User;
}

const UserCard = ({ user }: UserCardProps) => {
    const navigate = useNavigate();

    const handleViewProfile = () => {
        navigate(`/users/${user.id}`);
    };

    // Получаем первую букву имени для аватара
    const getInitials = (name: string) => {
        return name.charAt(0).toUpperCase();
    };

    // Заголовок карточки
    const header = (
        <div className="user-card-header">
            <div className="user-avatar">
                <div className="avatar-placeholder">
                    {getInitials(user.name)}
                </div>
            </div>
            <div className="user-header-info">
                <h3 className="user-name">{user.name}</h3>
                <span className="user-username">@{user.username}</span>
            </div>
        </div>
    );

    // Кнопка перехода
    const footer = (
        <div className="user-card-footer">
            <Button
                label="Перейти в профиль"
                icon="pi pi-external-link"
                onClick={handleViewProfile}
                className="p-button-outlined"
                style={{ width: '100%' }}
            />
        </div>
    );

    return (
        <div className="user-card-wrapper">
            <Card
                header={header}
                footer={footer}
                className="user-card"
            >
                {/* Пустой children, так как дополнительной информации пока нет */}
                <div className="user-basic-info">
                    <div className="info-item">
                        <i className="pi pi-envelope"></i>
                        <span>{user.email}</span>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default UserCard;
