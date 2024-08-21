
import clsx from "clsx";
import UserInfo from "../components/userInfo";

export default function Layout({ children }) {

    return (
        <div className={clsx('flex px-10')}>
            <UserInfo />
            <div className={clsx('ml-8 p-8 border-2 border-black w-full')}>
                {children}
            </div>
        </div>
    )
}