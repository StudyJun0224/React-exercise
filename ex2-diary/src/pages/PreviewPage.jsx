import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function PreviewPage() {

    const navigate = useNavigate();

  return (
    <div>
      <h1>여행지: {window.localStorage.getItem('place')}</h1>
      <p>{window.localStorage.getItem('diaryContent')}</p>
      <button onClick = {() => {
        navigate('/');
      }}>홈으로</button>
    </div>
  );
}

export default PreviewPage;