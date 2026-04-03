import {useNavigate} from "react-router-dom";
import type { MenuItem } from "primereact/menuitem";
import { Menubar } from "primereact/menubar";

const Header = () => {
    const navigate = useNavigate();
    const items: MenuItem[] = [
        {
            label: 'Главная',
            icon: 'pi pi-home', // иконка из primeicons
            command: () => navigate('/')
        },
        {
            label: 'Посты',
            icon: 'pi pi-file',
            command: () => navigate('/posts')
        },
        {
            label: 'Пользователи',
            icon: 'pi pi-users',
            command: () => navigate('/users')
        },
        {
            label: 'Комментарии',
            icon: 'pi pi-comments',
            command: () => navigate('/comments')
        },
        {
            label: 'О проекте',
            icon: 'pi pi-info-circle',
            command: () => navigate('/about')
        }
    ];
    // 2. Опциональный контент слева (start)
    // const start = <h2 className="text-xl font-bold m-0">MyApp</h2>;

    // 3. Опциональный контент справа (end)
    // const end = (
    //     <div className="flex align-items-center gap-2">
    //         <i className="pi pi-bell"></i>
    //         <i className="pi pi-user"></i>
    //     </div>
    // );

    return (
        <div className="header">
            <Menubar
                model={items}  // 5 пунктов меню
                // start={start}  // левая часть
                // end={end}      // правая часть
            />
        </div>
    )
}
export default Header;
