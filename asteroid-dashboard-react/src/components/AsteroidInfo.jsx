import OrbitSimulator from './OrbitSimulator';

function AsteroidInfo({ asteroidName, onBack }) {
    return (
        <div className="asteroid-info-container">
            <header className="info-header">
                <h2>Orbit Details: {asteroidName}</h2>
                <p>Viewing the orbital path relative to the inner solar system.</p>
            </header>
            
            <div style={{ height: '500px', position: 'relative', borderRadius: '12px', overflow: 'hidden' }}>
                <OrbitSimulator 
                    targetAsteroid={asteroidName} 
                    onReturn={onBack} 
                />
            </div>
        </div>
    );
}

export default AsteroidInfo;