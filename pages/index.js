import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'First Meetup',
    image: 'https://images.pexels.com/photos/5935180/pexels-photo-5935180.jpeg',
    address: '321B, Baker Street, London, UK',
    description: 'This is a meetup',
  },
  {
    id: 'm2',
    title: 'Second Meetup',
    image:
      'https://images.pexels.com/photos/5935180/pexels-photo-5935180.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    address: '321B, Baker Street, London, UK',
    description: 'This is a meetup',
  },
  {
    id: 'm3',
    title: 'Third Meetup',
    image:
      'https://images.pexels.com/photos/5935180/pexels-photo-5935180.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    address: '321B, Baker Street, London, UK',
    description: 'This is a meetup',
  },
];
export default function Home() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}
