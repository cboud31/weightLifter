import React, { useState, useEffect } from 'react';

import Exercise from './Exercise';

const testData = [
  {
    title: 'Kettlebell Swing, One-Handed',
    description:
      'With feet slightly wider than shoulder width, bend knees slightly and thrust hips back to hold the kettlebell. Engage lats and abs while hiking the kettlebell between your legs. Drive your hips forward explosively to swing the kettlebell to shoulder height.',
    videoURL: 'https://www.youtube.com/watch?v=0L0cOOpyPpA&t=1s',
  },
  {
    title: 'Kettlebell Swing, Two-Handed',
    description:
      'With feet slightly wider than shoulder width, bend knees slightly and thrust hips back to hold the kettlebell. Engage lats and abs while hiking the kettlebell between your legs. Drive your hips forward explosively to swing the kettlebell to shoulder height.',
    videoURL: 'https://www.youtube.com/watch?v=yHxcTn1UeAc&t=2s',
  },
];

const ExerciseList = ({ exerciseList }) => {
  return (
    <div className="ExerciseList">
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
