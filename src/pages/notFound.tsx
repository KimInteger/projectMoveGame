import React from 'react';

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - 페이지를 찾을 수 없습니다</h1>
      <p>요청하신 페이지는 존재하지 않습니다.</p>
      <a href="/">홈으로 돌아가기</a>
    </div>
  );
};

export default NotFoundPage;
