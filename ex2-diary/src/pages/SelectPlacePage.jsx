import {React, useState} from 'react';
import {useNavigate} from 'react-router-dom';

function SelectPlacePage() {

    const navigate = useNavigate();
    const [selectedPlace, setSelectedPlace] = useState('');

    return (
    <div>
        <h1>🏖️ 여행지를 선택하세요! 🏕️</h1>
        <select id="select-place" name="place" onChange={
            (e) => {setSelectedPlace(e.target.value);}}>
        
            <option value="">여행지를 선택하세요</option>
            <option value="jeju">제주도</option>
            <option value="busan">부산</option>
            <option value="suwon">수원</option>
            
        </select>
        <button onClick={() => {
            if (selectedPlace !== '') {
                navigate('/write', {state: {place: selectedPlace}});
            }
            else {
                alert('여행지를 선택해주세요!');
            }
            }}>다음</button>
        
    </div>
    );
}

export default SelectPlacePage;