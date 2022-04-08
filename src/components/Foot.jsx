import React, { useRef } from 'react';
import { Button } from "react-bootstrap";
import emailjs,{ init } from 'emailjs-com';


import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

init("user_8i41KB1ZspBfFyW7mP0PB");
function Foot() {

    const form = useRef();

    function notifySuccess(){
 
        // Calling toast method by passing string
        toast.success('Message sent successfully',
        {position: toast.POSITION.BOTTOM_RIGHT})
    }
    function notifyDanger(){
 
        // Calling toast method by passing string
        toast.error('Error Sending Message',
        {position: toast.POSITION.BOTTOM_RIGHT})
    }

    function sendEmail(e) {
        
        e.preventDefault();
    
        emailjs.sendForm('SERVICE ID', 'YOUR TEMPLATE ID', form.current, "user_8i41KB1ZspBfFyW7mP0PB")
          .then((result) => {
              console.log(result.text);
              notifySuccess()
          }, (error) => {
                notifyDanger()
              console.log(error.text);
          });
      }

    return(
        <footer class="footer container-fluid">
    <div class="container">
        <div class="row">
            <div class="col-md-5">
                <h5><i class="fa fa-tree"></i> GREEN INC.</h5>
                <div class="row">
                    <div class="col-6">
                        <ul class="list-unstyled">
                            <li><a href="">Product</a></li>
                            <li><a href="">Benefits</a></li>
                            <li><a href="">Partners</a></li>
                            <li><a href="">Team</a></li>
                        </ul>
                    </div>
                    <div class="col-6">
                        <ul class="list-unstyled">
                            <li><a href="">Documentation</a></li>
                            <li><a href="">Support</a></li>
                            <li><a href="">Legal Terms</a></li>
                            <li><a href="">About</a></li>
                        </ul>
                    </div>
                </div>
                <ul class="nav">
                    <li class="nav-item"><a href="" class="nav-link pl-0"><i class="fa fa-facebook fa-lg"></i></a></li>
                    <li class="nav-item"><a href="" class="nav-link"><i class="fa fa-twitter fa-lg"></i></a></li>
                    <li class="nav-item"><a href="" class="nav-link"><i class="fa fa-github fa-lg"></i></a></li>
                    <li class="nav-item"><a href="" class="nav-link"><i class="fa fa-instagram fa-lg"></i></a></li>
                </ul>
                <br></br>
            </div>
            <div class="col-md-2">
                <h5 class="text-md-right">Contact Us</h5>
                <hr></hr>
            </div>
            <div class="col-md-5">
                <form ref={form} className="contact-form" onSubmit={sendEmail}>
                <fieldset class="form-group">
                <input type="text" name="user_name" class="form-control" id="exampleInputUser" placeholder="Enter Name" />
                    </fieldset>
                    <fieldset class="form-group">
                        <input type="email" name="user_email" class="form-control" id="exampleInputEmail1" placeholder="Enter email"/>
                    </fieldset>
                    <fieldset class="form-group">
                        <textarea name="message" class="form-control" id="exampleMessage" placeholder="Message"></textarea>
                    </fieldset>
                    <fieldset class="form-group text-xs-right">
                        {/* <button type="button" class="btn btn-secondary-outline btn-lg">Send</button> */}
                        <Button type="submit" onClick={sendEmail} variant="outline-light">Send</Button>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</footer>

    )
}
export default Foot