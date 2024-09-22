'use client'

import { useState } from "react";
import FileInput from "../components/input/FileInput";
import TextInput from "../components/input/TextInput";

export default function Enroll() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [usi, setUsi] = useState("");
    const [dob, setDob] = useState("");
    const [whyNeed, setWhyNeed] = useState("");
    const [selectedQualifications, setSelectedQualifications] = useState([]);
    const handleSelectionChange = (event) => {
        const options = event.target.options;
        const selectedValues = Array.from(options)
          .filter(option => option.selected)
          .map(option => option.value);
    
        setSelectedQualifications(selectedValues);
        console.log("Selected qualifications:", selectedValues);
      };
    const [point,setPoint] = useState(0);
    const [resume,setResume] = useState(null);  
    const [Passport,setPassport] = useState(null);  
    const [drivingLicense,setDrivingLicense] = useState(null);  
    const [photoId,setPhotoId] = useState(null);  
    const [mediCare,setMediCare] = useState(null);  
    const [refarenceLetter,setReferenceLetter] = useState(null);  

    return (
        <div className="flex flex-col pt-5 items-center px-5 bg-gray">
            <h1 className="text-3xl mb-5">Enroll Now</h1>
            <div className="w-full sm:max-w-[500px]">
                <div>
                    <TextInput 
                        onChange={(value) => setFirstName(value)} 
                        placeholder="First Name"
                        value = {firstName}
                    />
                </div>
                <div>
                    <TextInput 
                        onChange={(value) => setLastName(value)} 
                        placeholder="Last Name"
                        value = {lastName}
                    />
                </div>
                <div>
                    <TextInput 
                        onChange={(value) => setEmail(value)} 
                        placeholder="Email"
                        value = {email}
                    />
                </div>
                <div>
                    <TextInput 
                        onChange={(value) => setPhone(value)} 
                        placeholder="Phone/Mobile No"
                        value = {phone}
                    />
                </div>
                <div>
                    <TextInput 
                        onChange={(value) => setUsi(value)} 
                        placeholder="USI NO"
                        value = {usi}
                    />
                </div>
                <div className="w-full flex flex-col mb-4">
                    <p>Date Of Birth:</p>
                    <input className="h-9 px-2" type="date" value={dob} onChange={(e)=>setDob(e.target.value)} ></input>

                </div>
                <div>
                <p>Which qualification are you interested in ?</p>
                <select className="h-9 mb-4 w-full overflow-hidden text-ellipsis text-nowrap"  onChange={handleSelectionChange}>
                <option value="CHC33015">CHC33015 Certificate III in Individual Support</option>
                <option value="CHC43015">CHC43015 Certificate IV in Ageing Support</option>
                <option value="CHC43115">CHC43115 Certificate IV in Disability</option>
                <option value="CHC30121">CHC30121 Certificate III in Early Childhood Education and Care</option>
                <option value="CHC52015">CHC52015 Diploma of Community Services</option>
                <option value="CHC43315">CHC43315 Certificate IV in Mental Health</option>
                <option value="CHC53315">CHC53315 Diploma of Mental Health</option>
                <option value="CHC62015">CHC62015 Advanced Diploma of Community Sector Management</option>
                <option value="CHC51015">CHC51015 Diploma of Counselling</option>
                <option value="CHC50121">CHC50121 Diploma of Early Childhood Education and Care</option>
                <option value="CHC50413">CHC50413 Diploma of Youth Work</option>
                <option value="CHC40313">CHC40313 Certificate IV in Child, Youth and Family Intervention</option>
                <option value="CHC43415">CHC43415 Certificate IV in Leisure and Health</option>
                <option value="CHC40221">CHC40221 Certificate IV in School Based Education Support</option>
                <option value="CHC30221">CHC30221 Certificate III in School Based Education Support</option>
                <option value="CHC53215">CHC53215 Diploma of Alcohol and other Drugs</option>
                </select>
                </div>
                <div>
                <TextInput value={whyNeed} onChange={(value)=>setWhyNeed(value)} placeholder={"Why do you need this qualification"} />
                </div>

                <div >
                    <div className="flex justify-between">
                        <p>Identification Documents – 100 Point ID Checklist</p>
                        <p>{point}</p>
                    </div>
                    <div className="h-40 overflow-y-auto">
                    <FileInput placeholder={"Resume"} onChange={(file)=>setResume(file)}/>
                    <FileInput placeholder={"Passport-70"} onChange={(file)=>{setPassport(file);setPoint(point+70)}}/>
                    <FileInput placeholder={"Driving license-40"} onChange={(file)=>setDrivingLicense(file)}/>
                    <FileInput placeholder={"Photo ID-40"} onChange={(file)=>setPhotoId(file)}/>
                    <FileInput placeholder={"Medicare-25"} onChange={(file)=>setMediCare(file)}/>
                    <FileInput placeholder={"Reference Letter-20"} onChange={(file)=>setReferenceLetter(file)}/>
                    </div>
                </div>
            </div>


        </div>
    );
}
