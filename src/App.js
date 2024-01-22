import './App.css';
import About_me from './components/about_me';
import data from "./db.json"

function App() {
  return (
    <div className="App">
      <About_me 
        key={`About_me_${data.id}`}
        id={data.id}
        lastName={data.lastName}
        name={data.name}
        middleName={data.middleName}
        tel={data.tel}
        email={data.email}
        city={data.city}
        experience={data.experience}
        skill={data.skill}
        img={data.img}
      />
    </div>
  );
}

export default App;
