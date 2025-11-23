const BackgroundBubbles = ({ bubbles = [] }) => {
    return (
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
            {bubbles.map((b, i) => (
                <img
                    key={i}
                    src={b.src}
                    className="absolute"
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
