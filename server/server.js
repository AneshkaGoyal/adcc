const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");

// server used to send send emails
const app = express();
app.use(express.static(path.resolve(__dirname, '../build')));
app.use(cors());
app.use(express.json());
app.use("/", router);
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});

app.listen(5000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "aneshkadentalcarecentre@gmail.com",
        pass: "wsmj geqo pkvg amyv"
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to Send");
    }
});

router.post("/contact", (req, res) => {
    const name = req.body.firstName + req.body.lastName;
    const message = req.body.message;
    const phone = req.body.phone;
    const mail = {
        from: name,
        to: "aneshkagoyal@gmail.com",
        subject: "Request for appointment",
        html: `<p>Name: ${name}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json(error);
        } else {
            res.json({ code: 200, status: "Message Sent" });
        }
    });
});
