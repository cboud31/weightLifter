import React, { useState, useEffect } from 'react';
import './styles.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import {
  NavBar,
  Footer,
  DrawerMenu,
  ExerciseList,
  RoutineList,
} from '../components';

import { getExercises } from '../api';

const App = () => {
  const [exerciseList, setExerciseList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const startup = async () => {
    try {
      const data = await getExercises();
      const { exercises } = data;
      setExerciseList(exercises);

      console.log(data);
    } catch (error) {
      throw error;
    }
  };

  const filteredExercises = () => {
    return exerciseList.filter((x) => {
      return x.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
  };

  // return exercise.title.toLowerCase().includes(searchTerm.toLowerCase());

  useEffect(() => {
    startup();
  }, []);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <h1>Hello World</h1>
          </Route>
          <Route exact path="/exercises">
            <ExerciseList
              exerciseList={filteredExercises()}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          </Route>
          <Route exact path="/routines">
            <RoutineList />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
