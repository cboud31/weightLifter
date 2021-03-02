import React, { useState, useEffect } from 'react';

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

  useEffect(() => {
    startup();
  }, []);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <h1>Hello World!!</h1>
          </Route>
          <Route exact path="/exercises">
            <ExerciseList exerciseList={exerciseList} />
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
