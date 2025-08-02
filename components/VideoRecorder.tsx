import { useEffect, useRef, useState } from 'react';

type Props = {
    onVideoReady: (blob: Blob) => void;
};

const DEFAULT_SCRIPT = `Hi, my name is [Your Name]. I recently arrived in Australia and I'm looking for work in [industry]. I have experience in [your experience], and I'm excited to bring my skills to a new opportunity.`;

const estimateSecondsFromScript = (script: string): number => {
    const WORDS_PER_MINUTE = 130;
    const words = script.trim().split(/\s+/).filter(Boolean);
    const minutes = words.length / WORDS_PER_MINUTE;

    return Math.ceil(minutes * 60); // round up
}

const VideoRecorder = ({
    onVideoReady,
}: Props) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
    const [recordedBlob, setRecordedBlob] = useState<Blob | null>(null);
    const [script, setScript] = useState<string>(DEFAULT_SCRIPT);
    const [scrollY, setScrollY] = useState<number>(0);
    const [recorderStep, setRecorderStep] = useState<'presentation' | 'recording' | 'confirmation'>('presentation');
    const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
    const estimatedSeconds = estimateSecondsFromScript(script);

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
            const completeBlob = new Blob(localChunks, { type: 'video/mp4' });
            setRecordedBlob(completeBlob);

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
        setRecorderStep('recording');

        // Start scrolling
        scrollIntervalRef.current = setInterval(() => {
            setScrollY((prev) => prev + 1);
        }, 100); // Adjust speed here
    };

    const stopRecording = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        mediaRecorder?.stop();
        setRecorderStep('confirmation');

        if (scrollIntervalRef.current) {
            clearInterval(scrollIntervalRef.current);
        }
    };

    const resetRecording = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setMediaRecorder(null);
        setScrollY(0);
        setRecorderStep('presentation');

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

    const handleKeepVideoPress = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (recordedBlob) {
            onVideoReady(recordedBlob);
            setRecordedBlob(null);
            setRecorderStep('presentation');
        }
    };

    return (
        <div className="relative flex flex-col">
            <h2 className="text-2xl font-bold text-center mb-3">
                Presentation Video Recorder
            </h2>
            <div className={`relative w-full max-w-xl mx-auto rounded overflow-hidden ${recorderStep === 'recording' || recorderStep === 'confirmation' ? '' : 'hidden'}`}>
                <video
                    ref={videoRef}
                    className="w-full"
                    autoPlay
                    playsInline
                />
                {recorderStep === 'recording' && (
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
                recorderStep === 'presentation' && <div>
                    <p className='mb-2'>
                        We created a simple script to help you get started. Feel free to modify it as you like.
                    </p>

                    <textarea
                        className="border rounded p-2 text-sm w-full"
                        rows={4}
                        value={script}
                        onChange={(e) => setScript(e.target.value)}
                        placeholder="Write or paste your script here..."
                    />

                    <p className={`mt-2 text-sm flex ${estimatedSeconds < 15 || estimatedSeconds > 30 ? '' : 'text-green-600'}`}>
                        Estimated video length: <strong className='ml-1'>{estimatedSeconds} seconds</strong>.
                        {estimatedSeconds < 15
                            && <span className='ml-1'>
                                <svg height={20} width={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_iconCarrier">
                                        <path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#0F0F0F"></path>
                                        <path d="M17 9.5C17 10.3284 16.3284 11 15.5 11C14.6716 11 14 10.3284 14 9.5C14 8.67157 14.6716 8 15.5 8C16.3284 8 17 8.67157 17 9.5Z" fill="#0F0F0F"></path>
                                        <path d="M8 14C7.44772 14 7 14.4477 7 15C7 15.5523 7.44772 16 8 16H15.9991C16.5514 16 17 15.5523 17 15C17 14.4477 16.5523 14 16 14H8Z" fill="#0F0F0F"></path>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 20.9932C7.03321 20.9932 3.00683 16.9668 3.00683 12C3.00683 7.03321 7.03321 3.00683 12 3.00683C16.9668 3.00683 20.9932 7.03321 20.9932 12C20.9932 16.9668 16.9668 20.9932 12 20.9932Z" fill="#0F0F0F">
                                        </path>
                                    </g>
                                </svg>
                            </span>}
                        {
                        estimatedSeconds > 30 && <span className='ml-1'>
                                <svg height={20} width={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_iconCarrier">
                                        <path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#0F0F0F"></path>
                                        <path d="M17 9.5C17 10.3284 16.3284 11 15.5 11C14.6716 11 14 10.3284 14 9.5C14 8.67157 14.6716 8 15.5 8C16.3284 8 17 8.67157 17 9.5Z" fill="#0F0F0F"></path>
                                        <path d="M8 14C7.44772 14 7 14.4477 7 15C7 15.5523 7.44772 16 8 16H15.9991C16.5514 16 17 15.5523 17 15C17 14.4477 16.5523 14 16 14H8Z" fill="#0F0F0F"></path>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 20.9932C7.03321 20.9932 3.00683 16.9668 3.00683 12C3.00683 7.03321 7.03321 3.00683 12 3.00683C16.9668 3.00683 20.9932 7.03321 20.9932 12C20.9932 16.9668 16.9668 20.9932 12 20.9932Z" fill="#0F0F0F">
                                        </path>
                                    </g>
                                </svg>
                            </span>
                        }
                        {
                            estimatedSeconds >= 15 && estimatedSeconds <= 30 && <span className='ml-1'>
                                <svg height={20} width={20}viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="SVGRepo_iconCarrier">
                                            <path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#0F0F0F"></path>
                                            <path d="M17 9.5C17 10.3284 16.3284 11 15.5 11C14.6716 11 14 10.3284 14 9.5C14 8.67157 14.6716 8 15.5 8C16.3284 8 17 8.67157 17 9.5Z" fill="#0F0F0F"></path>
                                            <path d="M8.88875 13.5414C8.63822 13.0559 8.0431 12.8607 7.55301 13.1058C7.05903 13.3528 6.8588 13.9535 7.10579 14.4474C7.18825 14.6118 7.29326 14.7659 7.40334 14.9127C7.58615 15.1565 7.8621 15.4704 8.25052 15.7811C9.04005 16.4127 10.2573 17.0002 12.0002 17.0002C13.7431 17.0002 14.9604 16.4127 15.7499 15.7811C16.1383 15.4704 16.4143 15.1565 16.5971 14.9127C16.7076 14.7654 16.8081 14.6113 16.8941 14.4485C17.1387 13.961 16.9352 13.3497 16.4474 13.1058C15.9573 12.8607 15.3622 13.0559 15.1117 13.5414C15.0979 13.5663 14.9097 13.892 14.5005 14.2194C14.0401 14.5877 13.2573 15.0002 12.0002 15.0002C10.7431 15.0002 9.96038 14.5877 9.49991 14.2194C9.09071 13.892 8.90255 13.5663 8.88875 13.5414Z" fill="#0F0F0F"></path>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 20.9932C7.03321 20.9932 3.00683 16.9668 3.00683 12C3.00683 7.03321 7.03321 3.00683 12 3.00683C16.9668 3.00683 20.9932 7.03321 20.9932 12C20.9932 16.9668 16.9668 20.9932 12 20.9932Z" fill="#0F0F0F"></path> </g>
                                        </svg>
                            </span>
                        }
                    </p>

                    <div className='mt-2'>
                        <p className='text-sm mb-2'>Notes:</p>
                        <ul className="list-disc pl-5 text-sm">
                            <li>You can re-record if you're not satisfied with the first take.</li>
                            <li>The script will be visible while the video is recorded but will not be part of the final video.</li>
                        </ul>
                    </div>
                </div>
            }

            <div className="flex gap-4 justify-center mt-4">
                {
                    recorderStep === 'presentation' && (
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
                    )
                }

                {
                    recorderStep === 'recording' && (
                        <button
                            onClick={stopRecording}
                            className="bg-red-600 text-white px-4 py-2 rounded-3xl"
                        >
                            Stop Recording
                        </button>
                    )
                }

                {
                    recorderStep === 'confirmation' && (
                        <div className='flex gap-4 flex-col lg:flex-row w-full lg:w-auto'>
                            <button
                                onClick={resetRecording}
                                className="secondary-btn w-full lg:w-auto"
                            >
                                Re-record
                            </button>
                            <button className='primary-btn w-full lg:w-auto' onClick={handleKeepVideoPress}>
                                Keep this Video
                            </button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default VideoRecorder;
