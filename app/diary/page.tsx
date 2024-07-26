import Navbar from '../components/Navbar';
import Background from '../components/Background';

export default function Diary() {
    return (
        <div>
            <Background></Background>
            <Navbar></Navbar>
            <h1 className='page-title'>Diary</h1>
            <div className='absolute top-0 flex m-auto text-white text-justify bg-transparent'>
                Workouts
            </div>
        </div>
    );
}