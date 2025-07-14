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
            {
                (!recording && !recordedBlob) && (
                    <div>
                        <p className='text-sm mb-2'>Notes:</p>
                        <ul className="list-disc pl-5 text-sm">
                            <li>1. You can re-record if you're not satisfied with the first take.</li>
                            <li>2. The video will be saved in your profile for you to review later.</li>
                            <li>3. The script is just a starting point; you can change it as needed.</li>
                            <li>4. The script will be visible while the video is recorded but will not be part of the final video.</li>
                        </ul>
                    </div>
                )
            }

            <div className={`relative w-full max-w-xl mx-auto rounded overflow-hidden ${recording || recordedBlob ? '' : 'hidden'}`}>
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

            {
                (!recording && !recordedBlob) && (
                     <p className=''>
                        We created a simple script to help you get started. Feel free to modify it as you like.
                    </p>
                )
            }

            {(!recording && !recordedBlob) && (
                <textarea
                    className="border rounded p-2 text-sm w-full"
                    rows={4}
                    value={script}
                    onChange={(e) => setScript(e.target.value)}
                    placeholder="Write or paste your script here..."
                />
            )}

            <div className="flex gap-4 justify-center">
                {recording ? (
                    <button
                        onClick={stopRecording}
                        className="bg-red-600 text-white px-4 py-2 rounded-3xl"
                    >
                        Stop Recording
                    </button>
                ) : recordedBlob ? (
                    <div className='flex gap-4'>
                        <button
                            onClick={resetRecording}
                            className="secondary-btn"
                        >
                            Re-record
                        </button>
                        <button className='primary-btn'>
                            Keep this Video
                        </button>
                    </div>
                ) : (
                    <button
                        onClick={startRecording}
                        className="group cursor-pointer bg-primary-text hover:bg-white border-2 border-primary-text duration-500 flex gap-2 items-center text-white hover:text-primary-text px-4 py-2 rounded-3xl"
                    >
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
                    </button>
                )}
            </div>
        </div>
    );
};

export default VideoRecorder;
