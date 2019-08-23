import React from 'react';
import Dog from './../dog/Dog';
import './DogList.css';

function printAllDogs(dogs) {
  return dogs.map((dog, idx) =>
    <div key={idx} className="dog-container">
      <div>Hello, I am a <span className="dog-name">{dog}</span> </div>
      <Dog dogName={dog} key={idx} />
    </div>
  );
}
const DogList = ({dogs}) => {
  return (
    <section>
      <section className="all-dogs">
        {printAllDogs(dogs)}
      </section>
    </section>
  )
};
export default DogList;