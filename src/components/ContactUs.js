import { useState } from "react";

const ContactUs = () => {

    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[phoneNumber, setPhoneNumber] = useState("");
    const[message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); 
      
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Phone Number:", phoneNumber);
        console.log("Message:", message);

      
        
      };

    return( 
        <div className="flex w-full min-h-screen justify-center item-center">
            <div className="flex flex-row w-full max-w-4xl shadow-lg m-12 rounded-xl space-x-24  p-8 bg-cyan-600">
                <div className=" flex flex-col space-y-6 m-6 p-4">
                    <div >
                        <h1 className="text-4xl font-bold tracking-wide ">Contact Me</h1>
        
                    </div>
                    <div>
                        <h2 className="text-xl mt-4 font-semibold tracking-wide ">Get in Touch</h2>
                    </div>
                    <div className="flex flex-col space-y-6">
                        <div className="inline-flex space-x-2 items-center text-sm">
                            <ion-icon name="call"></ion-icon>
                            <span>(+91)-234-252</span>
                        </div>
                        <div className="inline-flex space-x-2 items-center text-sm">
                            <ion-icon name="mail"></ion-icon>
                            <span>kanchan123@gmail.com</span>
                        </div>
                        <div className="inline-flex space-x-2 items-center text-sm">
                            <ion-icon name="location"></ion-icon>
                            <span>Street, Boston, America</span>
                        </div>
                            
                    </div>
                    <div>
                        <p className="text-sm  mt-4">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                         when an unknown printer took a galley of type and scrambled</p>
                    </div>
                </div>

                <div className="bg-white w-full p-8 rounded-xl shadow-lg text-gray-400">
                    <form action="" className="flex flex-col space-y-5" onSubmit={handleSubmit}>
                        <div>
                            <label className="text-md"> Your name</label>
                            <input type="text" 
                            placeholder="Enter your full name" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className = "ring-1 ring-gray-300 mt-2 w-full text-sm rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"></input>
                            
                        </div>
                        <div>
                            <label className="text-md">Your email</label>
                            <input type="email" 
                            placeholder="Enter your Email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className = "ring-1 ring-gray-300 text-sm mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"></input>
                            
                        </div>
                        <div>
                            <label className="text-md"> Mobile No.</label>
                            <input type="number" 
                            placeholder="Enter your number" 
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className = "ring-1  ring-gray-300 text-sm mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"></input>
                            
                        </div>
                        <div>
                            <label className="text-md"> Message</label>
                            <textarea type="text" 
                            placeholder="Message" 
                            rows={4}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className = "ring-1 text-sm ring-gray-300 mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"></textarea>

                        </div>
                        <div>
                            <button className="bg-teal-400 text-white rounded-lg p-2 shadow-lg self-end">Submit</button>
                        </div>
                        

                    
                       
                    </form>
                </div>
            
            </div>
        </div>
        
        
    )
}

export default ContactUs;