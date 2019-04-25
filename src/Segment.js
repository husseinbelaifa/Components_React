import React from "react";
import SegmentDetails from "./SegmentDetails";
const Segment = props => {
  console.log(props);
  return (
    <div>
      <SegmentDetails>
        <div className="ui icon header">
          <i className="pdf file outline icon" />
          No documents are listed for this document.
        </div>
        <div className="ui primary button">Add document</div>
      </SegmentDetails>
      <SegmentDetails>
        <h4 className="ui header">For your Information</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
          incidunt, illo voluptatem voluptatibus, quo laborum nostrum blanditiis
          tempora harum, saepe molestiae doloremque explicabo pariatur iusto
          vel? Eius nemo dignissimos modi?
        </p>
      </SegmentDetails>
    </div>
  );
};

export default Segment;
