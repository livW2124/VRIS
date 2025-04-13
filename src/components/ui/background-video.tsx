export const BackgroundVideo = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-[1280px] h-[832px] object-cover absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>
    </div>
  );
}; 