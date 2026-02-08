import { motion } from "framer-motion";

interface LoadingScreenProps {
    onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
        >
            <video
                autoPlay
                muted
                playsInline
                preload="auto"
                onEnded={onComplete}
                className="w-full h-full object-cover scale-110" // scale-110 zooms in 10% to hide watermark
            >
                <source src="/phone_aspire.mp4" media="(max-width: 768px)" />
                <source src="/pc_aspire.mp4" media="(min-width: 769px)" />
                {/* Fallback for browsers that don't support media in source or video tag */}
                Your browser does not support the video tag.
            </video>
        </motion.div>
    );
};

export default LoadingScreen;
