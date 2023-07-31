import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Dashlayout from "../layouts/Dashlayout";
import MsgsLayout from "../layouts/MsgsLayout";
import Chat from "../components/chat/Chat";
import Settings from "../components/Settings";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
export const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route >
            <Route path="/auth">
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
            </Route>
            <Route path="/dashboard" element={<Dashlayout />}>
                <Route path="messages" element={<MsgsLayout />}>
                    <Route path=":msgID" element={<Chat />} />
                </Route>
                <Route path="settings" element={<Settings />} />
            </Route>
        </Route>
    )
)