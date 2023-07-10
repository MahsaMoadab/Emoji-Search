import { useEffect, useState } from "react";

const useViewMode = () => {
    const [view, setView] = useState('card');

    useEffect(() => {
        const localView = window.localStorage.getItem('view');
        if (localView === 'grid') {
            setView(localView);
        }
    }, []);


    const toggleView = (type) => {
        window.localStorage.setItem('view', type);
        setView(type);
    }

    return [view, toggleView]
}

export default useViewMode;