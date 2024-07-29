import Navbar from '../components/Navbar';
import Background from '../components/Background';

export default function Diary() {
    return (
        <div>
            <Background></Background>
            <h1 className='page-title'>Diary</h1>
            <Navbar></Navbar>
        </div>
    );
}