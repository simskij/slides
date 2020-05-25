Reveal.initialize({
  dependencies: [
    { src: 'plugin/markdown/marked.js' },
    { src: 'plugin/markdown/markdown.js' },
    { src: 'plugin/notes/notes.js', async: true },
    { src: 'plugin/highlight/highlight.js', async: true },
  ],
});

const config = {
  apiKey: 'EXCHANGE_FOR_API_KEY',
  authDomain: 'EXCHANGE_FOR_AUTH_DOMAIN',
  databaseURL: 'EXCHANGE_FOR_DATABASE_URL',
  projectId: 'EXCHANGE_FOR_PROJECT_ID',
  storageBucket: 'speaker-votum.appspot.com',
  messagingSenderId: 'EXCHANGE_FOR_SENDER_ID',
  appId: 'EXCHANGE_FOR_APP_ID',
  measurementId: 'EXCHANGE_FOR_MEASUREMENT_ID',
};

firebase.initializeApp(config);

const event = 'zmarta';
const switchQuestionTo = (id) => {
  console.log(firebase);
  firebase.database().ref(`/events/${event}/current_question`).set(id);
};

Reveal.addEventListener('0', () => switchQuestionTo(0));
Reveal.addEventListener('1', () => switchQuestionTo(1));
Reveal.addEventListener('2', () => switchQuestionTo(2));
Reveal.addEventListener('3', () => switchQuestionTo(3));
Reveal.addEventListener('4', () => switchQuestionTo(4));
Reveal.addEventListener('5', () => switchQuestionTo(5));
Reveal.addEventListener('6', () => switchQuestionTo(6));
Reveal.addEventListener('7', () => switchQuestionTo(7));
Reveal.addEventListener('8', () => switchQuestionTo(8));
Reveal.addEventListener('9', () => switchQuestionTo(9));
Reveal.addEventListener('10', () => switchQuestionTo(10));
