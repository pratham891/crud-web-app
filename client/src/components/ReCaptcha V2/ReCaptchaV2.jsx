import React, { useEffect, useRef, useState } from 'react';

const ReCaptchaV2 = ({ sitekey, callback }) => {
    const reCaptchaRef = useRef(null);
    const [isReCaptchaLoaded, setIsReCaptchaLoaded] = useState(false);

    const onReCaptchaLoad = () => {
        setIsReCaptchaLoaded(true);
    }

    useEffect(() => {
        if (!window.grecaptcha) {
            window.onReCaptchaLoad = onReCaptchaLoad;
            const script = document.createElement('script');
            script.src = "https://www.google.com/recaptcha/api.js?onload=onReCaptchaLoad&render=explicit";
            script.async = true;
            script.defer = true;
            document.head.appendChild(script);
        } else {
            onReCaptchaLoad();
        }

        return () => {
            window.onReCaptchaLoad = null;
        }
    }, []);

    useEffect(() => {
        if (isReCaptchaLoaded && reCaptchaRef.current) {
            window.grecaptcha.render(reCaptchaRef.current, {
                'sitekey': sitekey,
                'callback': callback
            });
        }
    }, [isReCaptchaLoaded, sitekey, callback]);

    return (
        <div ref={reCaptchaRef}></div>
    );
}

export default ReCaptchaV2;
