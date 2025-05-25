const Particles = () => {
    return (
        <div className="particles-container">
            {[...Array(60)].map((_, index) => {
                const directionX = Math.random() * 100 - 50; // Random value between -50 and 50
                const directionY = Math.random() * 100 + 50; // Random value between 50 and 150 (mostly downward)
                const rotationAmount = Math.random() * 720 - 360; // Random rotation -360 to 360 degrees
                const animDuration = Math.random() * 30 + 25; // 25-55s

                return (
                    <div
                        key={index}
                        className={`snowflake snowflake-${index % 4}`}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 15}s`,
                            animationDuration: `${animDuration}s`,
                            '--move-x': `${directionX}px`,
                            '--move-y': `${directionY}px`,
                            '--rotation': `${rotationAmount}deg`
                        }}
                    />
                );
            })}
        </div>
    );
};

export default Particles;