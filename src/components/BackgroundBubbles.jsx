const BackgroundBubbles = ({ bubbles = [] }) => {
    return (
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
            <style jsx>{`
                @keyframes float1 {
                    0%, 100% { transform: translate(0, 0) rotate(0deg); }
                    25% { transform: translate(20px, -15px) rotate(2deg); }
                    50% { transform: translate(-15px, 10px) rotate(-1deg); }
                    75% { transform: translate(10px, -20px) rotate(1deg); }
                }
                @keyframes float2 {
                    0%, 100% { transform: translate(0, 0) rotate(0deg); }
                    33% { transform: translate(-25px, 15px) rotate(-3deg); }
                    66% { transform: translate(15px, -25px) rotate(2deg); }
                }
                @keyframes float3 {
                    0%, 100% { transform: translate(0, 0) rotate(0deg); }
                    20% { transform: translate(30px, -10px) rotate(4deg); }
                    40% { transform: translate(-20px, 20px) rotate(-2deg); }
                    60% { transform: translate(10px, -30px) rotate(1deg); }
                    80% { transform: translate(-15px, 15px) rotate(-3deg); }
                }
                @keyframes float4 {
                    0%, 100% { transform: translate(0, 0) rotate(0deg); }
                    25% { transform: translate(-20px, -25px) rotate(-2deg); }
                    50% { transform: translate(25px, 15px) rotate(3deg); }
                    75% { transform: translate(-15px, 20px) rotate(-1deg); }
                }
                .bubble-float-1 {
                    animation: float1 15s ease-in-out infinite;
                }
                .bubble-float-2 {
                    animation: float2 18s ease-in-out infinite;
                }
                .bubble-float-3 {
                    animation: float3 20s ease-in-out infinite;
                }
                .bubble-float-4 {
                    animation: float4 16s ease-in-out infinite;
                }
            `}</style>
            {bubbles.map((b, i) => (
                <img
                    key={i}
                    src={b.src}
                    className={`absolute ${`bubble-float-${(i % 4) + 1}`}`}
                    style={{
                        top: b.top,
                        left: b.left,
                        width: b.size,
                        transform: b.rotate ? `rotate(${b.rotate})` : "none",
                    }}
                />
            ))}
        </div>
    );
};

export default BackgroundBubbles;