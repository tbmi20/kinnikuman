import Navbar from '../components/Navbar';
import Background from '../components/Background';
import Header from '../components/Header';

export default function Diary() {
    return (
        <div>
            <Background></Background>
            <Header page="Diary"></Header>
            <Navbar></Navbar>
        </div>
    );
}