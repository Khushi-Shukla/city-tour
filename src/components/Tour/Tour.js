import React, { Component } from 'react'
import './Tour.scss'
export default class Tour extends Component {
    render() {
        return (
            <article className="tour">
                 <div className="img-container">
                     <img src="https://images.pexels.com/photos/4210037/pexels-photo-4210037.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="img" />
                 <span className="close-btn">
                     {/* <i className="fas fa-window-close"></i> */}
                     <i className="fas fa-window-close"></i>
                 </span>
                 </div>
                 <div className="tour-info">
                     <h3>city</h3>
                     <h4>name</h4>
                     <h5>info<span><i className="fas fa-caret-square-down"/></span></h5>   
                     <p>
                         lorem lispjdsfhnkdjn dfkjsdj  sdfuhsdk
                          dfhsd dfhk akfdkhj sdfh k fsidfuh sd hk ds
                     </p>
                 </div>
                single tour
            </article>
        )
    }
}
