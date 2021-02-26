import axios from 'axios';

export async function getExercises() {
  try {
    console.log('Inside getExercises --> Line 5');
    const { data } = await axios.get('http://localhost:5000/api/exercises');

    console.log('getExercises:', data);
    return data;
  } catch (error) {
    throw error;
  }
}
