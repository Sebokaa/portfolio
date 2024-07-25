import React from 'react'
import "./home.css"

function home() {
  return (
    <div className="masterContainer">
        <div className="container">
            <div className="logo"><h1>Y.S</h1></div>
            <div className="navbar">
                <h2><a href="">About</a></h2>
                <h2><a href="">Experience</a></h2>
                <h2><a href="">Projects</a></h2>
                <h2><a href="">Contact</a></h2>
            </div>
        </div>
        <div className="home">
                <div className="headers">
                    <div className="intro">
                        <h4>Hello I'm,</h4>
                        <h1>Yaffet Seboka</h1>
                        <h3 className = "greyOut">Aspiring Software Engineer</h3>
                        <div className="buttons">
                            <button className = "cv">Download CV</button>
                            <div className="spacer"></div>
                            <button className = "info">Contact Info</button>
                        </div>
                    </div>
                </div>
                <div className="image">
                    <img src="https://cdn.discordapp.com/attachments/633856368532783105/1265166624495894569/profile.jpg?ex=66a085bc&is=669f343c&hm=f11353c8879a4f8a94d99ddb412c3d8e11c0d3e96b11bf19b318a5af8003ffeb&" alt="" />
                </div>
            </div>
    </div>
  )
}

export default home