import React, { useState } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

function WriteDiaryPage() {

    const navigate = useNavigate();
    const place = useLocation().state?.place;

    const [diaryContent, setDiaryContent] = useState('');

  return (
    <div>
      <h1>{place}</h1>
      <textarea id="diary-content" placeholder="여행기를 작성하세요" rows="10" cols="50" onChange={(e)=>{
        setDiaryContent(e.target.value);
      }}/>
      <button onClick={() => {
        if (diaryContent.trim() === '') {
          alert('여행기를 작성해주세요!');
        } else {
            window.localStorage.setItem('diaryContent', diaryContent);
            window.localStorage.setItem('place', place);
          navigate('/preview');
        }
      }}>완료</button>
            
    </div>
  );
}

export default WriteDiaryPage;