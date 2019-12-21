import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { 
  Form,
  Button 
}  from 'react-bootstrap';

import SectionHeading from './SectionHeading';

// import VotersArePoll from '../../data/votersArePoll';

const Poll = ({heading, otherInput, comments}) => {

  const commentsList = comments.map( (comment, index) => {
    return (
      <p key={index}>
      <span><Link to='/'>{comment.user}</Link></span><br/>
        {comment.comment}
      </p>
    )
  });

  return (
    <div className="poli-poll mb-3">
      <Form className="p-2">
      <SectionHeading color="red" heading={heading} />
        <Form.Check
          type="radio"
          label="Democrat"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="Republican"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label="Independent"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
        <Form.Check
          type="radio"
          label={otherInput.label}
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
        <br />
        <Button>Rock My Vote</Button>
      </Form>

      <Form className="p-2">
        <SectionHeading color="black" heading="Comments" />
        <div className="poli-poll__comments mb-3">
          {commentsList}
        </div>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Add Comment</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
        
        <Button>Add Comment</Button>
      </Form>
    </div>
  );
}

Poll.propTypes = {
  heading: PropTypes.string,
  otherInput:  PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired
}

Poll.defaultProps = {
  heading: 'Poll'
}

export default Poll;