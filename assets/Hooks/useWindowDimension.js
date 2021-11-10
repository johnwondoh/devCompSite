import { useState, useEffect } from 'react';

// editted to pass in window, since it errors when building the next project

const isBrowser = (typeof window !== "undefined");

const getWindowDimensions = () => {
    // height = 720;
    // width=720
    //   if (isBrowser) const { innerWidth: width, innerHeight: height } = window;
    const width = isBrowser ? window.innerWidth : 720;
    const height = isBrowser ? window.innerHeight : 720;
    return {
        width,
        height
    };
}

const useWindowDimension = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        if (isBrowser) {
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    return windowDimensions;
}

export default useWindowDimension;