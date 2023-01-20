

const Sidebar = ({topic, changeTopic}) => {
    return (
        <div className="sidebar">
            <div className="social-logo-container">
                <img src="/images/Social-Logo.png" alt="social-logo" className="social-logo"/>
                <p className="social-logo-text">SOCIAL</p>
            </div>
            <button style={{fontWeight: topic === "General" ? "bold" : "normal"}} onClick={() => changeTopic("General")}>General</button>
            <button style={{fontWeight: topic === "Career" ? "bold" : "normal"}} onClick={() => changeTopic("Career")}>Career</button>
            <button style={{fontWeight: topic === "Culture" ? "bold" : "normal"}} onClick={() => changeTopic("Culture")}>Culture</button>
            <button style={{fontWeight: topic === "News" ? "bold" : "normal"}} onClick={() => changeTopic("News")}>News</button>
            <button style={{fontWeight: topic === "Politics" ? "bold" : "normal"}} onClick={() => changeTopic("Politics")}>Politics</button>
            <button style={{fontWeight: topic === "Social" ? "bold" : "normal"}} onClick={() => changeTopic("Social")}>Social</button>
            <button style={{fontWeight: topic === "Sports" ? "bold" : "normal"}} onClick={() => changeTopic("Sports")}>Sports</button>
        </div>
    )
}

export default Sidebar