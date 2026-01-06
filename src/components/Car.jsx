
const Car = () => {
    return (
        <div className="card" key={car.id}>
            <img src={car.image} alt={car.title} />
            <h2>{car.title}</h2>
            <p>{car.description}</p>
        </div>
    );
}

export default Car;