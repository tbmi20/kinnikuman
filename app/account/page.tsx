import Navbar from "../components/Navbar";
import Background from "../components/Background";
import Header from "../components/Header";
import { Button } from "@/components/ui/button";
 
 export default function Account() {
    return (
        <div>
            <Background></Background>
            <Header page="Account"></Header>
            <div>
                Welcome
            </div>
            <Button asChild className="m-2">
                <a href="/portal/login">Login</a>
            </Button>
            <Button asChild className="m-2">
                <a href="/portal/register">Register</a>
            </Button>
            <Navbar></Navbar>
        </div>
    );
}
