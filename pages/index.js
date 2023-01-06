import FirstModale from "components/forms/firstModale";
import InternSlote from "components/forms/InternSlote";
import Head from "next/head";
import axios from "axios"
import { Component, useState } from "react";
import Orgnization from "components/orgnization";

export default class Home extends Component {
    render() {
        return (
            <>
                <Head >
                    <title> Bootstrap Simple Contact Form</title>
                </Head>

                <div className="container-fluid">
                    <div className="row" style={{ height: "93vh;" }}>
                        <div className="col-3 bg-white">
                            <h2 className="text-center m-2 mb-4">Hosting Organization</h2>
                            <div className="input-group mb-3">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <button className="btn btn-outline-secondary" type="button" id="button-addon"><i className="fa fa-search"></i></button>

                                    </div>
                                    <input type="search" className="form-control" placeholder="Search ..." />
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#firstModale"><i className="fa fa-plus"></i> Add</button>
                                    </div>
                                </div>

                            </div>
                            <p className="text-center border-bottom pb-2" />
                            <div className="list-group">
                                {this.props?.data?.map((item, index) => {
                                    let show = async () => {
                                        let { data } = await axios.get('/api/hoc/' + item.HOC)
                                        this.setState({ orgnization: data })
                                        // console.log(this.state);
                                    }
                                    return (
                                        <a href="#" onClick={show} role="button" className="list-group-item list-group-item-action" key={index}>
                                            <div className="row align-items-center">
                                                <div className="col">

                                                    <div className="card">
                                                        <div className="card-header">
                                                            {item.HON}
                                                        </div>
                                                        <div className="card-body">
                                                            <blockquote className="blockquote mb-0">
                                                                <p style={{ fontSize: "12px;" }}>{item.HOC}</p>
                                                                <footer className="blockquote-footer">{item.Dept} </footer>
                                                            </blockquote>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="col-1">


                                                    <span className="badge bg-info">{item.num} </span>
                                                </div>
                                            </div>
                                        </a>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="col-9 pl-0 border-left">
                            <div className="d-flex flex-row bg-white text-dark p-2 justify-content-between">
                                <a className="navbar-brand text-dark" href="#"><i className="fa fa-expand"></i></a>
                                <h2 className="text-center">Slote Details</h2>
                                <a id="details_link" className="navbar-brand text-dark" href="">Next</a>
                            </div>
                            <div className="container mt-2 mb-2  " id="collapseExample">
                                {this.state && this.state.orgnization
                                    ? <Orgnization data={this.state && this.state.orgnization} />
                                    : ''}

                            </div>
                        </div>
                    </div>
                </div>



                <div className="modal fade" id="firstModale">
                    <FirstModale />

                </div>

                <div className="modal fade" id="secondModale">
                    <InternSlote data={this.state && this.state.orgnization.data} />
                </div>
               
                <div id="confirm" className="modal fade">
                    <div className="modal-dialog modal-confirm2">
                        <div className="modal-content">
                            <div className="modal-header">
                                <div className="icon-box">
                                    <i className="material-icons">&#xE876;</i>
                                </div>
                                <h4 className="modal-title w-100">Done</h4>
                            </div>
                            <div className="modal-body">
                                <p className="text-center">Record Deleted Successful</p>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-success btn-block" data-dismiss="modal">OK</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="Done" className="modal fade">
                    <div className="modal-dialog modal-confirm3">
                        <div className="modal-content">
                            <div className="modal-header justify-content-center">
                                <div className="icon-box">
                                    <i className="material-icons">&#xE876;</i>
                                </div>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body text-center">
                                <h4>Great!</h4>
                                <p>New Record has been added successfully.</p>
                                <button className="btn btn-success" data-dismiss="modal"><span>Continue</span> <i className="material-icons">&#xE5C8;</i></button>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}


export async function getServerSideProps() {
    let NEXT_PUBLIC_API = process.env.NEXT_PUBLIC_API
    let { data } = await axios.get(NEXT_PUBLIC_API + '/hostingorgnization')
    return { props: data }

}