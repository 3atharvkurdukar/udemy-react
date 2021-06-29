import React from 'react';
import MeetupDetails from '../components/meetups/MeetupDetails';

function MeetupDetailsPage() {
  return (
    <div>
      <MeetupDetails
        id="m1"
        title="First Meetup"
        image="https://images.pexels.com/photos/5935180/pexels-photo-5935180.jpeg"
        address="321B, Baker Street, London, UK"
        description="This is a meetup"
      />
    </div>
  );
}

export default MeetupDetailsPage;
