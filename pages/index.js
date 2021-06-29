import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'First Meetup',
    image:
      'https://images.pexels.com/photos/427679/pexels-photo-427679.jpeg?cs=srgb&dl=pexels-chris-schippers-427679.jpg&fm=jpg',
    address: '321B, Baker Street, London, UK',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisis viverra tempus. Aliquam eu vulputate mauris, id rutrum magna. Ut vitae gravida libero, sed accumsan risus. Nam sapien tortor, lacinia at neque et, mollis varius nisl. Sed elit justo, rutrum vel lobortis sit amet, blandit vel velit. Morbi quis tortor quis mi dictum convallis et vitae quam. Nunc a ligula ante. Pellentesque consectetur erat a hendrerit aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a molestie augue. Vivamus dolor lorem, bibendum ac quam ut, tempus tempor dolor. Proin nec pellentesque risus. Donec accumsan neque lorem, in volutpat arcu pharetra eu. Sed vel auctor lorem. Maecenas at laoreet ex. Aliquam nec nibh quis sapien aliquet euismod sed finibus lorem. Aenean sit amet purus ut lacus finibus finibus. Etiam sollicitudin ultrices sagittis. Quisque ac est mauris. Nullam malesuada efficitur nulla. Nam ante nisl, vulputate non venenatis vel, tincidunt vitae massa. Donec vel dictum velit. In molestie aliquam lacinia. Vivamus sapien lectus, fringilla in lorem consequat, suscipit ultrices.',
  },
  {
    id: 'm2',
    title: 'Second Meetup',
    image:
      'https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?cs=srgb&dl=pexels-burst-374870.jpg&fm=jpg',
    address: '2354 Honeysuckle Lane, Seattle, WA, USA',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a molestie augue. Vivamus dolor lorem, bibendum ac quam ut, tempus tempor dolor. Proin nec pellentesque risus. Donec accumsan neque lorem, in volutpat arcu pharetra eu. Sed vel auctor lorem. Maecenas at laoreet ex. Aliquam nec nibh quis sapien aliquet euismod sed finibus lorem. Aenean sit amet purus ut lacus finibus finibus. Etiam sollicitudin ultrices sagittis. Quisque ac est mauris. Nullam malesuada efficitur nulla. Nam ante nisl, vulputate non venenatis vel, tincidunt vitae massa. Donec vel dictum velit. In molestie aliquam lacinia. Vivamus sapien lectus, fringilla in lorem consequat, suscipit ultrices.',
  },
  {
    id: 'm3',
    title: 'Third Meetup',
    image:
      'https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?cs=srgb&dl=pexels-carlos-oliva-3586966.jpg&fm=jpg',
    address: '1541  Morningview Lane, New York, NY, USA',
    description:
      'Sed sed ipsum vitae leo fringilla finibus in ac arcu. Etiam ac laoreet lacus, vitae ultrices massa. Nullam suscipit sem turpis, id hendrerit felis semper vel. Pellentesque interdum elit quis leo ullamcorper mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a molestie augue. Vivamus dolor lorem, bibendum ac quam ut, tempus tempor dolor. Proin nec pellentesque risus. Donec accumsan neque lorem, in volutpat arcu pharetra eu. Sed vel auctor lorem. Maecenas at laoreet ex. Aliquam nec nibh quis sapien aliquet euismod sed finibus lorem. Aenean sit amet purus ut lacus finibus finibus. Etiam sollicitudin ultrices sagittis. Quisque ac est mauris. Nullam malesuada efficitur nulla. Nam ante nisl, vulputate non venenatis vel, tincidunt vitae massa. Donec vel dictum velit. In molestie aliquam lacinia. Vivamus sapien lectus, fringilla in lorem consequat, suscipit ultrices.',
  },
];

export default function Home({ meetups }) {
  return <MeetupList meetups={meetups} />;
}

// Page is re-rendered for each request
export async function getServerSideProps(context) {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
      validate: 60,
    },
  };
}

// Page is re-built every 60 seconds
// export async function getStaticProps() {
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//       validate: 60,
//     },
//   };
// }
