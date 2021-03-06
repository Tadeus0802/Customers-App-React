import React, { Component } from 'react';
import AppFrame from '../components/AppFrame';
import { withRouter } from 'react-router-dom';
import CustomersActions from '../components/CustomersActions';

class HomeContainer extends Component {

    handleOnClick = () => {
        this.props.history.push("/customers")
    }

    render() {
        return (
            <div>
                <AppFrame header="Clients" body={
                    <div>
                        <p>Add, edit and delete clients!</p>
                        <CustomersActions>
                            <button onClick={this.handleOnClick}>
                                List of Clients
                            </button>
                        </CustomersActions>
                    </div>
                }
                >

                </AppFrame>
            </div>
        )
    }
}

export default withRouter(HomeContainer);