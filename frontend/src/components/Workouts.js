import Workout from '../components/Workout'

const Workouts = ({workouts}) => {
    console.log(workouts)

    return (
        <div className="workouts">
            <h2 className="workout-form-container">Workouts</h2>
            {workouts.map(workout => (
                <Workout workout={workout} />
            ))}
        </div>
    )
}

export default Workouts