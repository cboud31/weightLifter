import axios from 'axios';

export async function getExercises() {
  try {
    const { data } = await axios.get('/api/exercises');

    return data;
  } catch (error) {
    throw error;
  }
}
