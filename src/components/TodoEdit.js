import React, { useCallback, useState }from 'react';

function ToDoEdit({ selectedTodo, onUpdate }) {
    const [value, setValue] = useState('');
    const onChange = useCallback((e) => {
      setValue(e.target.value);
    }, []);
    const onSubmit = useCallback(
      (e) => {
        setValue(''); //value 초기화
        //기본이벤트(새로고침) 방지
        e.preventDefault();
      },
      [value],
    );
    
    return (
      <div className="background">
        <form onSubmit={onSubmit} className="todoedit__insert">
          <h2>수정하기</h2>
          <input
            onChange={onChange}
            value={value}
            placeholder="할 일을 입력하세요"
          />
          <button type="submit">수정하기</button>
        </form>
      </div>
    );
  }

  export default ToDoEdit;