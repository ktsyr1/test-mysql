import axios from "axios"
import { useRouter } from "next/router";
export default function InternSlote({ data }) {
    console.log(data);
    let Router = useRouter()
    async function send(e) {
        let values = {
            orgcode: data.HOC,
            orgname: data.Slname,
            major: document.querySelector('[name="major"]').value,
            alt_major: document.querySelector('[name="alt_major"]').value,
            location: document.querySelector('[name="location"]').value,
            building: document.querySelector('[name="building"]').value,
            WAT: document.querySelector('[name="WAT"]').value,
            gender: document.querySelector('[name="gender"]').value,
            supervisor: data.BL,
            slots: document.querySelector('[name="slots"]').value
        }
        await axios.post('/api/internslots', values)
        // Router.reload()
    }
    return (
        <form action="" method="post" className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title text-center">Intern Slote Data</h5>
                    <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close"></button>
                </div>

                <input type="hidden" name="orgcode" id="orgcode" />
                <input type="hidden" name="orgname" id="orgname" />
                <input type="hidden" name="supervisor" id="supervisor" />
                <div className="modal-body">
                    <div className="mb-3">
                        <label for="major" className="form-label">Major <span className="text-danger">*</span></label>
                        <select name="major" className="form-control" id="major" required >
                            <option defaultValue="" disabled></option>
                            {major.map((major, index) => <option defaultValue={major} key={index}>{major}</option>)}
                        </select>
                    </div>

                    <div className="mb-3">
                        <label for="alt_major" className="form-label">Alternative Major <span className="text-danger">*</span></label>
                        <select name="alt_major" className="form-control" id="alt_major" required >
                            <option defaultValue="" disabled></option>
                            {major.map((major, index) => <option defaultValue={major} key={index}>{major}</option>)}
                        </select>
                    </div>

                    <div className="mb-3">
                        <label for="location" className="form-label">Working Location <span className="text-danger">*</span></label>
                        <select name="location" className="form-control" id="location" required >
                            <option defaultValue="" disabled></option>
                            {city.map((major, index) => <option defaultValue={major} key={index}>{major}</option>)}

                        </select>
                    </div>

                    <div className="mb-3">
                        <label for="building" className="form-label">Building Number/Name <span className="text-danger">*</span></label>
                        <input type="text" name="building" className="form-control" id="building" required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Working Area Type <span className="text-danger">*</span></label>
                        <br />
                        <div className="form-check form-check-inline mr-5">
                            <input className="form-check-input" type="radio" name="WAT" id="inlineRadio1" defaultValue="Remote Area" required />
                            <label className="form-check-label" for="inlineRadio1">Remote Area</label>
                        </div>
                        <div className="form-check form-check-inline mr-5">
                            <input className="form-check-input" type="radio" name="WAT" id="inlineRadio2" defaultValue="Plant" />
                            <label className="form-check-label" for="inlineRadio2">Plant</label>
                        </div>
                        <div className="form-check form-check-inline ">
                            <input className="form-check-input" type="radio" name="WAT" id="inlineRadio3" defaultValue="Other" />
                            <label className="form-check-label" for="inlineRadio3">Other</label>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Gender <span className="text-danger">*</span></label>
                        <br />
                        <div className="form-check form-check-inline mr-5">
                            <input className="form-check-input" type="radio" required name="gender" id="inlineRadio1_1" defaultValue="Male" />
                            <label className="form-check-label" for="inlineRadio1_1">Male</label>
                        </div>
                        <div className="form-check form-check-inline mr-5">
                            <input className="form-check-input" type="radio" name="gender" id="inlineRadio2_1" defaultValue="Female" />
                            <label className="form-check-label" for="inlineRadio2_1">Female</label>
                        </div>
                        <div className="form-check form-check-inline ">
                            <input className="form-check-input" type="radio" name="gender" id="inlineRadio3_1" defaultValue="Any" />
                            <label className="form-check-label" for="inlineRadio3_1">Any</label>
                        </div>
                    </div>

                    <div className="mb-3 w-50">
                        <label for="slots" className="form-label">Number of Slots <span className="text-danger">*</span></label>
                        <input type="number" name="slots" id="slots" required min="0" />
                    </div>
                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-dismiss="modal">Cancel</button>
                    <button type="button" onClick={send} name="add_new_slot" className="btn btn-success" >Save</button>
                </div>
            </div>
        </form >
    )
}
let major = [
    "Chemical Engineering Technology",
    "Mechanical Maintenance ENG. TECH.",
    "Electrical Power Engineering Technology",
    "Mechanical Maintenance",
    "industrial Welding",
    "industrial Pipe fitting Skill",
    "Electrical Machines",
    "industrial instrumentation",
    "industrial Electrical & Control",
    "Maintenance Craft Training",
    "Marketing",
    "Accounting",
    "HUMAN RESOURCE MANAGEMENT ",
    "Software Design & Development",
    "Computer Technical support",
    "Business Administration",
    "Occupational Safety & Health",
    "Civil Engineer",
    "TRANSLATION",
    "English",
    "Supply Chain Management",
    "Architecture",
    "Computer Science",
    "FINANCIAL MANAGEMENT",
    "AVIATION MAINT TECH",
    "GRAPHICS Design",
    "ENVIRONMENTAL HEALTH",
    "Aircraft Maintenance Engineering",
    "Office Management",
    "Public Relations",
    "Computer and Information Technology",
    "COMMUNICATIONS",
    "Multimedia and Website Graphics",
    "computer Science and information System",
    "Designer",
    "Instrumentation & Control Technology",
    "Air Conditioning and Refrigeration Engin",
    "Warehouse Management",
    "Computer Systems",
    "INTERIOR DESIGN",
    "Computer Programming",
    "Electrical and Electronic Eng. Technolog",
    "INDUSTRIAL TECHNOLOGY",
    "MECHANICAL TECHNOLOGY",
    "Computer Networks Technology",
    "Computer & Information Technology",
    "Executive Secretary",
    "Computer Technology",
    "Chemistry or Laboratory Tech",
    "warehouse operation",
    "Graphic Design",
    "NONDESTRUCTIVE TESTING TECH",
    "Surveying",
    "PROCESS CONTROL TECH.",
    "PROJECT AND CONSTRUCTION MANAGEMENT",
    "SAFETY ENGINEERING"
]
let city = [
    "Abha",
    "Abqaiq",
    "Abu Ail",
    "Ain Dar",
    "Al-Aflaj",
    "Al-Bahah",
    "Al-Hasa",
    "Dammam",
    "Dhahran",
    "Dhuba",
    "Fadhli",
    "Haradh",
    "Hawiyah",
    "Hawtah",
    "Hayil",
    "Hofuf(Al-Hasa)",
    "Jeddah",
    "Jizan",
    "Juaymah",
    "Jubail",
    "Khmis Mushait",
    "Khobar",
    "Khurais",
    "Khursaniyah",
    "Madinah",
    "Manifa",
    "Mubarraz",
    "Najran",
    "Qasim",
    "Qatif",
    "Qurayyah",
    "Rabigh",
    "Ras alkhair",
    "Ras Tanura",
    "Riyadh",
    "Safaniya",
    "Shaybah",
    "Shedgum",
    "Tabouk",
    "Tanajib",
    "Thuwal",
    "Turai",
    "Turaif",
    "Udhailiyah",
    "Uthmaniyah",
    "Wasit",
    "Yanbu"
]