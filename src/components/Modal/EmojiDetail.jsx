import React from "react";

export default function EmojiDetail({ data, closeButton }) {
  return (
    <div className="modal">
      <div className="details">
        <div className="modal_header">
          <div className="modal_header_title">
          {data.unicodeName}
          </div>
          <button className="close" onClick={closeButton}>
            <img src="./assets/images/close.svg" alt="" />
          </button>
          
        </div>
        <div className="details_copy" onClick={()=> navigator.clipboard.writeText(data.character)}>
          <img src="./assets/images/copy.svg" alt="" />
        </div>
        <div className="details_content">
          <div className="details_content_emoji">{data.character}</div>
          <div className="details_content_info">
            <p>
              <span>Name:</span> {data.unicodeName}
            </p>
            <p>
              <span>Code Point:</span> {data.codePoint}
            </p>
            <p>
              <span>group:</span> {data.group}
            </p>
            <p>
              <span>Sub Group:</span> {data.subGroup}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
