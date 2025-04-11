import { useLocation, useNavigate } from "react-router-dom"
import Router from "./views/Router"
import { lazy, useEffect, useState } from "react";
const Loader = lazy(() => import ("./views/Loader"));
import { auth } from "./api/database/connect";

function App() {
    const location = useLocation();

    const [authorized, setAuthorized] = useState(false);
    const [load, setLoad] = useState(true);
    const active = location.pathname;
    const navigate = useNavigate();

    useEffect(() => {
        if (active === "/") {
            setLoad(false)
            return
        };
        setTimeout(() => {
            auth.onAuthStateChanged((user) => {
                if (user) {
                    if (active === '/panel') {
                        setLoad(false)
                        setAuthorized(true)
                        return
                    }
                    setAuthorized(true);
                    setLoad(false);
                    navigate('/panel')
                } else {
                    if (active === '/login') {
                        setLoad(false)
                        return
                    }
                    setLoad(false);
                    navigate('/login')
                }
            });
        }, 1000);
    }, [active]);

  return (
    <>
        {load ? <Loader /> : <Router />}
        {/* <Router />
        <Loader /> */}
    </>
  )
}

export default App
