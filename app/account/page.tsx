import Navbar from "../components/Navbar";
import Background from "../components/Background";
import Header from "../components/Header";
import { Profile } from "@/app/api/session";
 
 export default function Account() {
    return (
        <div>
            <Background></Background>
            <Header page="Account"></Header>
            <div>
                Welcome
                <Profile></Profile>
            </div>
            <Navbar></Navbar>
        </div>
    );
}
