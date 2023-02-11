import Workout from '../components/Workout'

const Workouts = ({workouts}) => {
    console.log(workouts)

    const getWorkouts = () => {
        console.log('requested workouts')
    }

    return (
        <div className="workouts">
            <div className="workout-form-container">
                <h2>Workouts</h2>
                <form className="workout-form">
                    <div className="select-container">
                        <label className="workout-label">Muscle group:</label>
                        <select className="select-exercise">
                            <option value="biceps">biceps</option>
                            <option value="triceps">triceps</option>
                            <option value="chest">chest</option>
                            <option value="abdominals">abdominals</option>
                            <option value="lower_back">lower back</option>
                            <option value="quadriceps">quadriceps</option>
                            <option value="hamstrings">hamstrings</option>
                            <option value="glutes">glutes</option>
                        </select>
                    </div>
                    <div className="select-container">
                        <label className="workout-label" for="difficulty">Difficulty:</label>
                        <select className="select-exercise">
                            <option value="beginner">beginner</option>
                            <option value="intermediate">intermediate</option>
                            <option value="expert">expert</option>
                        </select>
                    </div>
                </form>
                <button onClick={getWorkouts}>Get Workouts</button>
            </div>
            {workouts.map(workout => (
                <Workout id={workout.name} workout={workout} />
            ))}
        </div>
    )
}

export default Workouts