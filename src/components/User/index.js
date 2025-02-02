import React, { Component } from 'react';
import UserLayout from '../../hoc/user';
import MyButton from '../utils/button'

export class UserDashboard extends Component {
    render() {
        return (
            <UserLayout>
                <div>
                
                <div className="user_nfo_panel">
                    <h1>User information</h1>
                    <div>
                        <span>user name</span>
                        <span>user lastname</span>
                        <span>user email</span>
                    </div>
                    <MyButton
                        type="default"
                        title="Edit account info"
                        linkTo="/user/user_profile"
                    />
                </div>

                {/* {
                    user.userData.history ? */}
                    <div className="user_nfo_panel">
                        <h1>History purchases</h1>
                        <div className="user_product_block_wrapper">
                            {/* <UserHistoryBlock
                                products={user.userData.history}
                            /> */}
                            History
                        </div>            
                    </div>

                    {/* :null
                } */}
                
                
            </div>
            </UserLayout>

        )
    }
}

export default UserDashboard
