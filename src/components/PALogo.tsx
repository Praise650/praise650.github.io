const PALogo = ({ size = 40 }: { size?: number }) => {
  return (
    <div
      className="rounded-full border-2 border-foreground flex items-center justify-center font-mono font-bold"
      style={{
        width: size,
        height: size,
        fontSize: size * 0.35,
      }}
    >
      PA
    </div>
  );
};

export default PALogo;
