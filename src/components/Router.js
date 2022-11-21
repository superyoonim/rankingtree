import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRouter = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    console.log(isLoggedIn);
    return (
        <Router>
         <Routes>
                { isLoggedIn ? (
                    <Route path='/'>
                        <Home />
                    </Route>
                ) : (
                    <Route path='/'>
                        <Auth />
                    </Route>
                )}
       </Routes>
       console.log(isLoggedIn);
        </Router>
    );
};

//Switch빼버림
export default AppRouter;