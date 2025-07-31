import {React, useState} from "react";
import '../styles/HomePage.css';
import {useNavigate} from 'react-router-dom';

function HomePage() {

    const [selectedDate, setDate] = useState('');

    const navigate = useNavigate();

    return (
        <div className="home-page">
            <h1>여행 일정을 시작해볼까요?🏝️</h1>
            <input type='date' className='date-input' onChange={(e)=>{
                setDate(e.target.value);
            }}/>
            <button className='start-button' onClick={()=>{
                if(!selectedDate) {
                    alert('날짜를 선택해주세요!');
                    return;
                }
                
                navigate('/schedule' , {state: {date: selectedDate}});
            }}>다음으로</button>
        </div>
    );
}

export default HomePage;