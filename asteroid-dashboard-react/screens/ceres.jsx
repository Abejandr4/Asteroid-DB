import AsteroidInfo from "../components/AsteroidInfo.jsx";
import { useLocation, useNavigate } from "react-router-dom";
// If you're using a router, you might import useNavigate


function Ceres() {

    const location = useLocation();
    const navigate = useNavigate();


    // 1. Define what happens on return
    const handleBack = () => {
        console.log("User clicked back!");
        // window.history.back(); // Or use a router navigation here
    };

    return (
        <div>
            <AsteroidInfo
                asteroidName="     1 Ceres (A801 AA)" // 2. Match the case (and check your JSON for the exact string)
                onBack={handleBack}    // 3. Pass the defined function
            />
        </div>
    );
}

export default Ceres;