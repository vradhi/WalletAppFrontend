import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DashboardItem from './DashboardItem';


class Dashboard extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             totalBalance:0.0
        }
    }
    

    componentWillReceiveProps(nextProps){
        if(nextProps.wallets){
            let totalBal = 0
            for(let i=0;i<nextProps.wallets.length;i++){
                totalBal=totalBal+nextProps.wallets[i].currentBalance
            }
            this.setState({totalBalance:totalBal})
        }
    }
    
    componentDidMount(){
        this.props.getWallets();
    }

    render() {
        return (

            <div className="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4 text-center">My Wallets</h1>
                            <br />
                            {/* <div className="btn-group">
                                <button type="button" className="btn btn-info btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" to="/createwallet">
                                    Create wallet
                                </button> */}
                                <div>
                                    <Link to="/createwallet">Create Wallet</Link>
                                    {/* <Link>Transaction</button> */}
                                </div>
                            {/* </div> */}
                            <br />
                            <div className="card text-center">
                                <div className="card-header bg-success text-white">
                                    <h4>Current Balance (Total)</h4>
                                    <h1>Rs. {this.state.totalBalance}</h1>
                                </div>
                            </div>
                            <hr />
                            <DashboardItem />
                            <br></br>
                            <DashboardItem />





                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;
