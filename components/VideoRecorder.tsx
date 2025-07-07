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
      <video ref={videoRef} autoPlay muted className="w-full max-w-md rounded shadow" />
      <div className="flex gap-2">
        {!recording ? (
          <div onClick={startRecording} className="bg-green-600 text-black px-4 py-2 rounded">
            Start Recording
          </div>
        ) : (
          <div onClick={stopRecording} className="bg-red-600 text-black px-4 py-2 rounded">
            Stop Recording
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoRecorder;
