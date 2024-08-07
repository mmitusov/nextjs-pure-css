import { useEffect, useState } from 'react';

export const useAdjustTextareaHeight = (chatInput: string, textAreaRef: React.RefObject<HTMLTextAreaElement>) => {
  const [textAreaRows, setTextAreaRows] = useState(1);
  const maxRows = 5; // Maximum number of rows allowed
  const lineHeight = 25; // Change this value to match your textarea line-height in CSS

  useEffect(() => {
    const textarea = textAreaRef.current;
    if (textarea) {
      if (chatInput) {
        const computedRows = Math.min(Math.ceil(textarea.scrollHeight / lineHeight), maxRows);
        setTextAreaRows(computedRows);
      } else {
        setTextAreaRows(1);
      }
    }
  }, [chatInput, textAreaRef]);
  return [ textAreaRows ];
}

import { useRef } from 'react';
import { FaArrowCircleUp } from "react-icons/fa";
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useDispatch } from 'redux-react-hook';
import { getChatInput, setChatInput } from '../../redux/chatWithCourseAiSlice';

interface ChatWithDataInputType {
  chatPending?: boolean,
  limitInputLength?: number,
  getGitLabCourseData(): void,
  className?: string
}

const ChatWithDataInput = ({chatPending, limitInputLength, getGitLabCourseData, className}: ChatWithDataInputType) => {
  const chatInput = useSelector(getChatInput);
  const dispatch = useDispatch();
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [ textAreaRows ] = useAdjustTextareaHeight(chatInput, textAreaRef)

  const handleKeypress = (e: any) => {
    if (e.keyCode === 13) {
      getGitLabCourseData();
    }
  };

  return (
    <div className={className}>
      <form onSubmit={e => { e.preventDefault() }}>
        <textarea 
            ref={textAreaRef}
            placeholder={`Ask a question...`}
            value={chatInput}
            rows={textAreaRows}
            disabled={chatPending}
            maxLength={limitInputLength}
            onChange={(e) => dispatch(setChatInput(e.target.value))}
            onKeyDown={(e)=> handleKeypress(e)}
        />
      </form>
      <button className="input-button" onClick={() => getGitLabCourseData()} disabled={chatPending}>
          <FaArrowCircleUp style={{ color: '#31c2f2'}} size={25}/>
      </button>
    </div>
  )
}

export default styled(ChatWithDataInput)`
  position: relative;
  display: flex;
  align-items: center;
  justify-items: center;
  padding-inline: 15px;
  padding-block: 8px;
  border-radius: 20px;
  width: 100%;
  background-color: white;
  border: 1px solid lightgray;


  form, textarea {
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: transparent;
    border: none;
    padding: 0;
    margin: 0;
    ::placeholder {
      font-weight: 500;
      font-size: 16px;
      color: #515151;
      opacity: 0.9;
    }
    :focus {
      outline: none;
    }
  }

  textarea {
    resize: none;
    overflow-x: auto;
    line-height: 1;
    outline: none;
    color: #515151;
    font-weight: 500;
    font-size: 16px;
    line-height: 25px;
    opacity: 0.9;
  }
  
  .input-button {
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 7px;
    cursor: pointer;
  }
`;