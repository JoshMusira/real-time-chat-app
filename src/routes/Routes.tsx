import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Dashlayout from "../layouts/Dashlayout";
import MsgsLayout from "../layouts/MsgsLayout";
import Chat from "../components/chat/Chat";
import Settings from "../components/Settings";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Dashboard from "../components/Dashboard";
import Call from "../components/Call";
import Analytics from "../components/Analytics";
import Files from "../components/Files";
import Community from "../components/Community";
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
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="call" element={<Call />} />
                <Route path="analytics" element={<Analytics />} />
                <Route path="files" element={<Files />} />
                <Route path="community" element={<Community />} />
                <Route path="settings" element={<Settings />} />
            </Route>
        </Route>
    )
)