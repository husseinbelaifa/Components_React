import React from "react";

const Segment = props => {
  console.log(props);
  return (
    <div>
      <div className="ui placeholder segment">
        <div className="ui icon header">
          <i className="pdf file outline icon" />
          No documents are listed for this document.
        </div>
        <div className="ui primary button">Add document</div>
      </div>
      <div className="ui placeholder segment">{props.children}</div>
    </div>
  );
};

export default Segment;
