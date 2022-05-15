import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (firstName && lastName && email && message && phone) {
        const serviceId = 'service_0ncumka';
        const templateId = 'template_x5341vn';
        const userId = 'user_QQ9zIRVpbXdpAYjVkvgPA';
        const templateParams = {
            firstName,
            lastName,
            email,
            phone,
            message
        };
        emailjs.send(serviceId, templateId, templateParams, userId)
            .then(response => console.log(response))
            .then(error => console.log(error));

            setFirstName('');
            setLastName('');
            setEmail('');
            setPhone("");
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
      }
    }

  return (
    <div className="Contact">
      <Grid>
        <Card style={{ maxWidth: 650, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h3">
              Contact Me!
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              fontSize="1.5em"
              component="p"
              gutterBottom
            >
              Fill out the form and I will get back to you as soon as possible!
            </Typography>
            <form onSubmit={handleFormSubmit}>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder="Enter first name"
                    type="text"
                    value={firstName}
                    onChange={(e)=> setFirstName(e.target.value)}
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder="Enter last name"
                    type="text"
                    value={lastName}
                    onChange={(e)=> setLastName(e.target.value)}
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="number"
                    placeholder="Enter phone number"
                    label="Phone"
                    value={phone}
                    onChange={(e)=> setPhone(e.target.value)}
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Message"
                    value={message}
                    onChange={(e)=> setMessage(e.target.value)}
                    multiline
                    rows={4}
                    placeholder="Type your message here"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
      {emailSent===true && <span className="emailSent">Thank you for your message, we will be in touch in no time!</span>}
    </div>
  );
};

export default ContactForm;
