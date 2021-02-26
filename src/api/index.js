import axios from 'axios';

export async function getExercises() {
  try {
    const { data } = await fetch('http://localhost:5000/api/');

    return data;
  } catch (error) {
    throw error;
  }
}
