

const Workout = ({workout}) => {
    return (
        <div className="workout">
            <div className="workout-name">{workout.name}</div>
            <div className="workout-muscle">{workout.muscle} - {workout.difficulty}</div>
            <div className="workout-instructions">{workout.instructions}</div>
        </div>
    )
}

export default Workout