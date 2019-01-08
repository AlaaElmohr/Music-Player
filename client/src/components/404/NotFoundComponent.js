import React , {Component} from 'react';
import BackgroundComponent from '../built-in-components/backgroundComponent/BackgroundComponent';
import { Link } from 'react-router-dom';
import './NotFoundComponent.scss'
class NotFoundComponent extends Component{
    render(){
        return(
            <div className="not-found">
                <div className="background-image">
                  <div className="overlay">
                    <div className="content">
                        <h1 className="text-center">404</h1>
                        <p className="text-center">The Page you were looking for doesn't exists</p>
                        <button className="btn btn-danger">Go Home</button>
                    </div>
                    </div>
              
                </div>
                
            </div>
        );
    }
}
export default NotFoundComponent;