import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';
import Main from '../../components/main/Main';
import Modal from '../modal/Modal';
import { getTotalData } from '../../actions/totalDataAction';
import { showModal } from '../../actions/modalAction';
import './App.css';

class App extends React.Component {

    componentDidMount() {
        if (localStorage.token === 'undefined') {
            this.props.history.push('/');
            return;
        }
        this.props.boundGetTotalData();
    //stex uxarki get request u staci sax bazayum exac student usanox ev aylni qanak
    //dzax masum add class add student add teacher dialog forma galis state@ poxelu mijocov urde grum em petq exac dataner@ submit anum u et avelanuma im storum
    //aj masi cankacaci vra clickic heto history-um pusha @lnum et click exac@, gnuma @te u sax bazayi exac@ sirun cuca tali
    }

    handleShowModalClick = (modalType) => {
        this.props.boundShowModal(modalType);
    }

    changeRoute = (route) => {
        this.props.history.push(`/admin/${route}`);
    }

    render() {
        return (
            <div className='app'>
                <Sidebar showModal={this.handleShowModalClick}/>
                    <Switch>
                        <Route exact path='/admin'>
                            <Main 
                                totalClasses={this.props.totalClasses}
                                totalTeachers={this.props.totalTeachers}
                                totalStudents={this.props.totalStudents}
                                changeRoute={this.changeRoute}
                            />
                        </Route>
                        <Route exact path='/admin/classes'>

                        </Route>
                        <Route exact path='/admin/teachers'>

                        </Route>
                        <Route exact path='/admin/students'>

                        </Route>
                    </Switch>
                {this.props.modalVisible ? <Modal modalType={this.props.modalType} /> : false}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        modalVisible: state.modal.modalVisible,
        modalType: state.modal.modalType,
        totalClasses: state.totalData.totalClasses,
        totalTeachers: state.totalData.totalTeachers,
        totalStudents: state.totalData.totalStudents,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        boundGetTotalData: () => dispatch(getTotalData()),
        boundShowModal: (modalType) => dispatch(showModal(modalType)),
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));