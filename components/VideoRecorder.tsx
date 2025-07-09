import { useRef, useState } from 'react';

const VideoRecorder = ({ onVideoReady }: { onVideoReady: (blob: Blob) => void }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [chunks, setChunks] = useState<Blob[]>([]);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    videoRef.current!.srcObject = stream;

    const recorder = new MediaRecorder(stream);
    recorder.ondataavailable = (e) => setChunks((prev) => [...prev, e.data]);
    recorder.onstop = () => {
      const blob = new Blob(chunks, { type: 'video/webm' });
      onVideoReady(blob);
      setChunks([]);
      stream.getTracks().forEach((track) => track.stop());
    };

    recorder.start();
    setMediaRecorder(recorder);
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorder?.stop();
    setRecording(false);
  };

  return (
    <div className="flex flex-col gap-2">
        <video ref={videoRef} autoPlay muted className={`${recording ? '' : 'hidden' } my-2 w-full max-w-xl mx-auto rounded-lg shadow relative z-50`} />
      <div className="flex gap-2 relative">
        {!recording ? (
          <div onClick={startRecording} className="group cursor-pointer bg-primary-text hover:bg-white border-2 border-primary-text duration-500 flex gap-2 items-center text-white hover:text-primary-text px-4 py-2 rounded-3xl">
            <div className='p-1 bg-white w-fit rounded-full border-white border-2 group-hover:bg-white group-hover:border-primary-text transition-all duration-500'>
                <svg viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width={8}
                    height={8}
                >
                    <g id="SVGRepo_iconCarrier">
                        <path
                            className='fill-primary-text transition-all duration-500'
                            d="M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59662 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z" fill="#fff">
                        </path>
                    </g>
                </svg>
            </div>
            Start Recording
          </div>
        ) : (
          <div onClick={stopRecording} className="cursor-pointer bg-red-600 text-white px-4 py-2 rounded">
            Stop Recording
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoRecorder;
