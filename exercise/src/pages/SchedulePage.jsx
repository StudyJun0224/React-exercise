import React from 'react';
import '../styles/SchedulePage.css';
import { useLocation, useNavigate } from 'react-router-dom';

function SchedulePage() {

    const navigate = useNavigate();

    const selectedDate = useLocation().state?.date; // Get the date from the location state
    
    if(selectedDate === undefined) {
        alert('날짜가 선택되지 않았습니다. 홈 페이지로 이동합니다.');
        navigate('/'); // Navigate back to home page
        return null;
    }
    return (
        <div className="schedule-page">
            <h1>여행 일정</h1>
            <p>선택한 날짜: {selectedDate}</p>
            <button className = 'save-button' onClick={() => {
                alert(`일정이 ${selectedDate}에 저장되었습니다.`);
                navigate('/'); // Navigate back to home page
            }}>일정 저장하기</button>
        </div>
    );

}

export default SchedulePage;