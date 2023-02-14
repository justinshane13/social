

const Sidebar = ({topic, changeTopic}) => {
    return (
        <div className="sidebar">
            <button className="sidebar-button" style={{fontWeight: topic === "General" ? "bold" : "normal"}} onClick={() => changeTopic("General")}><img src="/images/General.png" className="sidebar-icon" alt="topic icon"/>General</button>
            <button style={{fontWeight: topic === "Career" ? "bold" : "normal"}} onClick={() => changeTopic("Career")}><img src="/images/Career.png" className="sidebar-icon" alt="topic icon"/>Career</button>
            <button style={{fontWeight: topic === "Culture" ? "bold" : "normal"}} onClick={() => changeTopic("Culture")}><img src="/images/Culture.png" className="sidebar-icon" alt="topic icon"/>Culture</button>
            <button style={{fontWeight: topic === "News" ? "bold" : "normal"}} onClick={() => changeTopic("News")}><img src="/images/News.png" className="sidebar-icon" alt="topic icon"/>News</button>
            <button style={{fontWeight: topic === "Politics" ? "bold" : "normal"}} onClick={() => changeTopic("Politics")}><img src="/images/Politics.png" className="sidebar-icon" alt="topic icon"/>Politics</button>
            <button style={{fontWeight: topic === "Social" ? "bold" : "normal"}} onClick={() => changeTopic("Social")}><img src="/images/Social.png" className="sidebar-icon" alt="topic icon"/>Social</button>
            <button style={{fontWeight: topic === "Sports" ? "bold" : "normal"}} onClick={() => changeTopic("Sports")}><img src="/images/Sports.png" className="sidebar-icon" alt="topic icon"/>Sports</button>
        </div>
    )
}

export default Sidebar