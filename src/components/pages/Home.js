import { useNavigate } from "react-router-dom";


export default function Home () {
    // init navigate variable for page navigation
    const navigate = useNavigate();
    
    const navigateHome = () => navigate('/', { replace: false });
    const navigateUserSets = () => navigate('/userSets', { replace: false });
    const navigatePieces = () => navigate('/userPieces', { replace: false });
    const navigateStats = () => navigate('/stats', { replace: false });
    const navigateBrowseSets = () => navigate('/browseSets', { replace: false });
    const navigateOnlineStats = () => navigate('/onlineStats', { replace: false });


    return (
        <div className="home-wrapper">
            <div className="home-content-wrapper">
                <div className="home-left-ctr">
                    <button className="home-btn-primary" onClick={navigateUserSets}>
                        <div className="home-text-wrapper">
                            <h1 className="home-text">Your Collection</h1>
                        </div>
                    </button>
                </div>
                <div className="home-right-ctr">
                    <div className="home-btn-wrapper">
                        <button className="home-btn home-pieces-image" onClick={navigatePieces}>Your Missing Pieces</button>
                    </div>
                    <div className="home-btn-wrapper">
                        <button className="home-btn home-stats-image" onClick={navigateStats}>Your Statistics</button>
                    </div>
                    <div className="home-btn-wrapper">
                        <button className="home-btn home-browse-image" onClick={navigateBrowseSets}>Browse All Sets</button>
                    </div>
                    <div className="home-btn-wrapper">
                        <button className="home-btn home-online-image" onClick={navigateOnlineStats}>Online Statistics</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
