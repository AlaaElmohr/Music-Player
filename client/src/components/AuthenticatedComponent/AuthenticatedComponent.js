import React from 'react';
import {connect} from 'react-redux';

export function requireAuthentication(Component) {

    class AuthenticatedComponent extends React.Component {

        componentWillMount() {
            this.checkAuth();
        }

        componentWillReceiveProps(nextProps) {
            this.checkAuth();
        }

        checkAuth() {
            const token=localStorage.getItem('token');
            console.log("to"+token)
            if (!token) {
                this.props.history.push('/login')
                return false
            }
            else{
            return true
            }
        }

        render() {
            return (
                <div>
                    {this.checkAuth() === true
                        ? <Component {...this.props}/>
                        : null
                    }
                </div>
            )

        }
    }

    function mapStateToProps(state) {
        return { auth: state.auth.authenticated };
    }

    return connect(mapStateToProps)(AuthenticatedComponent);

}