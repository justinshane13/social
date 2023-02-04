import Workout from '../components/Workout'

const Workouts = ({workouts}) => {
    console.log(workouts)

    return (
        <div className="workouts">
            <div>Workouts</div>
            {workouts.map(workout => (
                <Workout workout={workout} />
            ))}
        </div>
    )
}

export default Workouts