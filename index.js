import react from 'react';
import { createRoot } from 'react-dom/client';

const users = [
  { name: 'John Doe', id: 1 },
  { name: 'Jane Doe', id: 2 },
  { name: 'Billy Doe', id: 3 },
];
function User({ name }) {
  return <p style={{ color: 'red' }}>{name}</p>;
}

function App() {
  return (
    <div style={styles.container}>
      <p style={styles.title}>User names:</p>
      {users.map((user) => (
        <User key={user.id} name={user.name} />
      ))}
      <div></div>
    </div>
  );
}

const styles = {
  container: {
    padding: 15,
  },
  title: {
    fontWeight: 'bold',
  },
  paragraph: {},
};

const root = createRoot(document.getElementById('app'));
root.render(<App />);
