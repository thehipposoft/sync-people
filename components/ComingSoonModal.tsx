import { useState } from "react";
import Modal from "./Modal";

type ComingSoonModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

const ComingSoonModal = ({
    isOpen,
    onClose
}: ComingSoonModalProps) => {
    const [email, setEmail] = useState("");

    const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (email) {
            // Handle the subscription logic here (e.g., send email to API)
            console.log(`Subscribed with email: ${email}`);
            onClose();
        } else {
            alert("Please enter a valid email address.");
        }
    };

    return (
        <Modal isOpen={isOpen}>
            <form
                className="flex flex-col items-center"
                onSubmit={handleSubscribe}
            >
                <h3 className="text-3xl font-bold text-center mb-5">
                    Coming Soon! Be Part of Insyncx Now
                </h3>
                <p className="text-lg text-center">
                    Exciting things are on the way! Want to be among the first to experience Insyncx?
                </p>
                <p className="text-lg text-center">
                    Sign up now for early access, exclusive updates, and a chance to be ahead of the curve when we launch.
                </p>
                <input
                    type="email"
                    className="border rounded p-2 mt-5 w-full"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    typeof="email"
                />
                <div className="flex gap-3 flex-wrap mt-5">
                    <button
                        className="primary-btn"
                        type="submit"
                    >
                        Notify Me!
                    </button>
                    <button
                        className="secondary-btn"
                        onClick={(e) => {
                            e.preventDefault();
                            onClose();
                        }}
                    >
                        No thanks, I'll wait
                    </button>
                </div>

            </form>
        </Modal>
    );
};

export default ComingSoonModal;
