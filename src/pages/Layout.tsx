import { Outlet } from "react-router-dom";
import { Header } from "@/components/header/Header";
import { Modal } from "@/components/modal/Modal";

export default function Layout() {
    return (
        <div>
            <Header />
            <Modal />
            <main className="p-4">
                <Outlet />
            </main>
        </div>
    );
}
