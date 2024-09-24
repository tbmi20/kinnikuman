import Navbar from "../components/Navbar";
import Background from "../components/Background";
import Header from "../components/Header";
 
 export default function Account() {
    return (
        <div>
            <Background></Background>
            <Header page="Account"></Header>
            <div>
                Welcome
            </div>
            <Navbar></Navbar>
        </div>
    );
}
