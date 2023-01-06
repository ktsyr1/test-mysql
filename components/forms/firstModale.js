import axios from "axios";
import {  useRouter } from "next/router";

export default function FirstModale() {
    let Router = useRouter()
    async function send(e) {
        let values = {
            HOC: document.querySelector('[name="HOC"]').value,
            HON: document.querySelector('[name="HON"]').value,
            BL: document.querySelector('[name="BL"]').value,
            GM: document.querySelector('[name="GM"]').value,
            Dept: document.querySelector('[name="Dept"]').value,
            Slid: document.querySelector('[name="Slid"]').value,
            Slname: document.querySelector('[name="Slname"]').value,
            Spnumber: document.querySelector('[name="Spnumber"]').value,
            Smnumber: document.querySelector('[name="Smnumber"]').value,
            Tclid: document.querySelector('[name="Tclid"]').value,
            Tcpnumber: document.querySelector('[name="Tcpnumber"]').value,
            Tcmnumber: document.querySelector('[name="Tcmnumber"]').value,
        }
        let { data } = await axios.post('/api/hostingorgnization', values) 
        Router.reload()
    }
    return (
        <form action="" method="post" className="modal-dialog">
            <div className="modal-content" style={{ width: "50vw", margin: "auto -7vw;" }}>
                <div className="modal-header">
                    <h5 className="modal-title text-center">Hosting Organization Data</h5>
                    <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close"></button>
                </div>
                <form action="" method="post">
                    <div className="modal-body">
                        <div className="mb-1">

                            <label for="HOC" className="form-label">Hosting Organization Code <span className="text-danger">*</span></label>
                            <input type="text" name="HOC" className="form-control" id="HOC" required />
                        </div>

                        <div className="mb-1">

                            <label for="HON" className="form-label">Hosting Organization Name <span className="text-danger">*</span></label>
                            <input type="text" name="HON" className="form-control" id="HON" required />
                        </div>

                        <div className="mb-1">
                            <label for="BL" className="form-label">Business Line <span className="text-danger">*</span></label>
                            <input type="text" name="BL" className="form-control" id="BL" required />
                        </div>
                        <div className="mb-1">
                            <label for="GM" className="form-label">Admin Area/General Managment <span className="text-danger">*</span> </label>
                            <input type="text" name="GM" className="form-control" id="GM" required />
                        </div>
                        <div className="mb-1">
                            <label for="Dept" className="form-label">Department/Division <span className="text-danger">*</span> </label>
                            <input type="text" name="Dept" className="form-control" id="Dept" required />
                        </div>

                        <div className="mb-1">
                            <label for="Slid" className="form-label">Supervisor Login ID <span className="text-danger">*</span></label>
                            <input type="text" name="Slid" className="form-control" id="Slid" required />
                        </div>

                        <div className="mb-1">
                            <label for="Slname" className="form-label">Supervisor Login Name <span className="text-danger">*</span></label>
                            <input type="text" name="Slname" className="form-control" id="Slname" required />
                        </div>


                        <div className="row">
                            <div className="col-5">
                                <div className="mb-1">
                                    <label for="Spnumber" className="form-label">Supervisor Phone Number <span className="text-danger">*</span></label>
                                    <input type="text" name="Spnumber" className="form-control" id="Spnumber" required />
                                </div>
                            </div>
                            <div className="col-7">
                                <div className="mb-1">
                                    <label for="Smnumber" className="form-label">Mobile Number</label>
                                    <input type="text" name="Smnumber" className="form-control" id="Smnumber" />
                                </div>
                            </div>

                        </div>

                        <div className="mb-1">
                            <label for="Tclid" className="form-label">Training Coordinator Login ID <span className="text-danger">*</span></label>
                            <input type="text" name="Tclid" className="form-control" id="Tclid" required />
                        </div>

                        <div className="row">
                            <div className="col-5">
                                <div className="mb-1">
                                    <label for="Tcpnumber" className="form-label">Training Coordinator Phone Number <span className="text-danger">*</span></label>
                                    <input type="text" name="Tcpnumber" className="form-control" id="Tcpnumber" required />
                                </div>
                            </div>
                            <div className="col-7">
                                <div className="mb-1">
                                    <label for="Tcmnumber" className="form-label">Mobile Number</label>
                                    <input type="text" name="Tcmnumber" className="form-control" id="Tcmnumber" />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="modal-footer">
                        <button id="btn_111" style={{ display: "none" }} data-toggle="modal" data-target="#Done"></button>
                        <button id="btn_222" style={{ display: "none" }} data-toggle="modal" data-target="#confirm"></button>
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Cancel</button>
                        <button type="button" className="btn btn-primary" name="add_new_hod" onClick={send}>Save changes</button>
                    </div>
                </form>
            </div>
        </form>
    )
} 