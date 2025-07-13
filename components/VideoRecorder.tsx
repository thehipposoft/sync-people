import { useEffect, useRef, useState } from 'react';

type Props = {
    onVideoReady: (blob: Blob) => void;
};

const DEFAULT_SCRIPT = `Hi, my name is [Your Name]. I recently arrived in Australia and I'm looking for work in [industry]. I have experience in [your experience], and I'm excited to bring my skills to a new opportunity.`;

const VideoRecorder = ({ onVideoReady }: Props) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
    const [recording, setRecording] = useState(false);
    const [recordedBlob, setRecordedBlob] = useState<Blob | null>(null);
    const [script, setScript] = useState(DEFAULT_SCRIPT);
    const [scrollY, setScrollY] = useState(0);
    const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

    const startRecording = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });

        if (videoRef.current) {
            videoRef.current.srcObject = mediaStream;
            videoRef.current.muted = true;
            videoRef.current.play();
        }

        const recorder = new MediaRecorder(mediaStream);
        const localChunks: Blob[] = [];

        recorder.ondataavailable = (e) => {
            if (e.data.size > 0) localChunks.push(e.data);
        };

        recorder.onstop = () => {
            const completeBlob = new Blob(localChunks, { type: 'video/webm' });
            setRecordedBlob(completeBlob);
            onVideoReady(completeBlob);

            if (videoRef.current) {
                videoRef.current.srcObject = null;
                videoRef.current.src = URL.createObjectURL(completeBlob);
                videoRef.current.controls = true;
                videoRef.current.muted = false;
            }

            mediaStream.getTracks().forEach((t) => t.stop());
        };

        recorder.start();
        setMediaRecorder(recorder);
        setRecording(true);

        // Start scrolling
        scrollIntervalRef.current = setInterval(() => {
            setScrollY((prev) => prev + 1);
        }, 100); // Adjust speed here
    };

    const stopRecording = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        mediaRecorder?.stop();
        setRecording(false);
        if (scrollIntervalRef.current) {
            clearInterval(scrollIntervalRef.current);
        }
    };

    const resetRecording = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setRecordedBlob(null);
        setMediaRecorder(null);
        setScrollY(0);

        if (videoRef.current) {
            videoRef.current.src = '';
            videoRef.current.srcObject = null;
            videoRef.current.controls = false;
        }
    };

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollY;
        }
    }, [scrollY]);

    return (
        <div className="relative flex flex-col gap-4">
            <div className="relative w-full max-w-xl mx-auto rounded overflow-hidden shadow">
                <video
                    ref={videoRef}
                    className="w-full"
                    autoPlay
                    playsInline
                />
                {recording && (
                    <div className="absolute inset-0 bg-black bg-opacity-40 pointer-events-none">
                        <div
                            ref={scrollRef}
                            className="absolute bottom-4 left-4 right-4 max-h-[60%] overflow-hidden text-white text-xl leading-relaxed"
                            style={{
                                fontFamily: 'sans-serif',
                                padding: '1rem',
                                lineHeight: '2rem',
                            }}
                        >
                            <div style={{ whiteSpace: 'pre-line' }}>
                                {script}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <textarea
                className="border rounded p-2 text-sm w-full max-w-xl mx-auto"
                rows={4}
                value={script}
                onChange={(e) => setScript(e.target.value)}
                placeholder="Write or paste your script here..."
            />

            <div className="flex gap-4 justify-center">
                {recording ? (
                    <button
                        onClick={stopRecording}
                        className="bg-red-600 text-white px-4 py-2 rounded"
                    >
                        Stop Recording
                    </button>
                ) : recordedBlob ? (
                    <button
                        onClick={resetRecording}
                        className="bg-gray-600 text-white px-4 py-2 rounded"
                    >
                        Re-record
                    </button>
                ) : (
                    <button
                        onClick={startRecording}
                        className="bg-blue-600 text-white px-4 py-2 rounded"
                    >
                        Start Recording
                    </button>
                )}
            </div>
        </div>
    );
};

export default VideoRecorder;
