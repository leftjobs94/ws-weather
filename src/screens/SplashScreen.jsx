import "./SplashScreen.scss"
function SplashScreen() {
    return (
        <div className={'splash-screen'}>
            <div>
                <div className={'weather-icon'}></div>
            </div>
            <div>
                <div className={'logo-app'}></div>
                <div className={'name-app'}>What's up Programming</div>
                <div className={'description'}>Weather app</div>
                <button className={'btn-started'}>Get started</button>
            </div>
        </div>
    );
}

export default SplashScreen;