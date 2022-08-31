import React from "react";
import { Button } from "antd";
import { NoteCard } from "../interface/Home";
import '../style/HomeNoteCard.less';
interface NoteCardProps {
  ele: NoteCard;
}
function HomeNoteCard(props: NoteCardProps) {
  const { title, children } = props.ele;
  return (
    <div className="note-content-card">
      <div className="header">
        <Button type="primary">{title}</Button>
      </div>
      {children.map((elem) => {
        return (
          <div key={elem.id} className="note-content-card-content">
            <div>《{elem.title}》</div>
            <div>{elem.author}</div>
          </div>
        );
      })}
      <div className="footer">
        <Button type="primary">简介</Button>
      </div>
    </div>
  );
}

export default HomeNoteCard;
