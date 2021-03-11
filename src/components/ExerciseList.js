import React, { useState, useEffect } from 'react';

import Exercise from './Exercise';
import SearchBar from './SearchBar';

const styling = {};

const ExerciseList = ({ exerciseList, searchTerm, setSearchTerm }) => {
  // const filteredExercises = () => {
  //   return exerciseList.filter((exercise) => {
  //     return exercise.title.toLowerCase().includes(searchTerm.toLowerCase());
  //   });
  // };
  // const filteredExList = filteredExercises();

  return (
    <div className="ExerciseList">
      <SearchBar
        label="Search All Exercises"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {exerciseList.map((exercise, idx) => {
        console.log(exercise);
        return (
          <div key={idx}>
            <Exercise
              key={exercise.exerciseID}
              title={exercise.title}
              description={exercise.description}
              videoURL={exercise.videoURL}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ExerciseList;
