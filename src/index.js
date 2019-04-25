import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import Message from "./Message";
import Segment from "./Segment";
import SegmentDetails from "./SegmentDetails";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="sam"
          timeAgo="Today at 4:45PM"
          content="Nice blog post!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 2:00AM"
          content="good blog!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Yesterday at 5:00PM"
          content="ok"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <Message
        header="Attention!"
        content="We just Updated our privacy policy here to better service our customers"
      />

      <Segment>
        <SegmentDetails />
      </Segment>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
