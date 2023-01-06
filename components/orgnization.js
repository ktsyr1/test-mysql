import { useState } from "react";

export default function Orgnization({ data }) {
    let { HOC, HON, BL, GM, Dept, Slid, Slname, Spnumber, Smnumber, Tclid, Tcpnumber, Tcmnumber, } = data.data
    let [DL, setDL] = useState(false)
    function Delete(e) {
        let data = {
            _id: e.target.getAttribute('_id'),
            orgcode: e.target.getAttribute('orgcode')
        }
        console.log({ data });

    }
    return (
        <>
            <div class='row'>
                <div class='col'>
                    <div class='card'>
                        <h5 class='card-header bg-secondary text-white'>Organization Info</h5>
                        <div class='card-body'>
                            <h5 class='card-title'></h5>
                            <div class='card-text'>
                                <div class='d-flex flex-row justify-content-between gap-2'>
                                    <p>{HON}</p>
                                    <p>{HOC}</p>
                                </div>
                                <hr />
                                <div class='d-flex flex-row justify-content-between gap-2'>
                                    <p>{BL} & {Dept} & {GM} </p>
                                    <p></p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class='col'>
                    <div class='card'>
                        <h5 class='card-header bg-secondary text-white'>Supervisor Info</h5>
                        <div class='card-body'>
                            <h5 class='card-title'></h5>
                            <div class='card-text'>
                                <div class='d-flex flex-row justify-content-between gap-2'>
                                    <p>{Slname}</p>
                                    <p>{Slid}</p>
                                </div>
                                <hr />
                                <div class='d-flex flex-row justify-content-between gap-2'>
                                    <p>{Spnumber} </p>
                                    <p></p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div class='row mt-3'>
                <div class='col'>
                    <div class='card'>
                        <h5 class='card-header bg-secondary-50 text-white'>
                            <button type='button' class='btn btn-success' data-toggle='modal' $func data-target='#secondModale'><i class='fa fa-plus'></i> Add</button>
                            <button onclick='linkDeleteAllSlotes(\"$HOC\")' type='button' class='btn btn-danger' data-toggle='modal' data-target='#myModal'><i class='fa fa-trash'></i> Delete</button>
                        </h5>
                        <div class='card-body' >
                            <table class='table'>
                                <thead>
                                    <tr>
                                        <th scope='col'>Org Code</th>
                                        <th scope='col'>Major</th>
                                        <th scope='col'>Location</th>
                                        <th scope='col'>Building</th>
                                        <th scope='col'>Gender</th>
                                        <th scope='col'>Count</th>
                                        <th scope='col'>Action</th>
                                    </tr>
                                </thead>
                                <tbody id='slots_view'>
                                    {data.slots.map(slot => {
                                        let { orgcode, major, location, building, gender, slots, id } = slot
                                        function set2() {
                                            setDL
                                        }
                                        return (
                                            <tr>
                                                <th scope='row'>{orgcode}</th>
                                                <td>{major}</td>
                                                <td>{location}</td>
                                                <td>{building}</td>
                                                <td>{gender}</td>
                                                <td>{slots}</td>
                                                <td>
                                                    <button type='button' onClick={set2} _id={id} orgcode={orgcode} class='btn btn-danger' data-toggle='modal' data-target='#myModal'><i class='fa fa-trash'></i> Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                            <div id="myModal" className="modal fade">
                                <div className="modal-dialog modal-confirm">
                                    <div className="modal-content">
                                        <div className="modal-header flex-column">
                                            <div className="icon-box">
                                                <i className="material-icons">&#xE5CD;</i>
                                            </div>
                                            <h4 className="modal-title w-100">Are you sure?</h4>
                                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                        </div>
                                        <input type="hidden" name="HOC" />
                                        <input type="hidden" name="id" />
                                        <div className="modal-body">
                                            <p>Do you really want to delete these records? This process cannot be undone.</p>
                                        </div>
                                        <div className="modal-footer justify-content-center">
                                            <button type="button" id="cancel" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                            <button type="button" onClick={Delete} className="btn btn-danger" id="deleteSlote">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}