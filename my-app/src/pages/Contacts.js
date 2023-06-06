import {useContext, useState} from "react";
import {Form, Button, Container} from "react-bootstrap";
import '../css/allPage.css';
import '../css/Contacts.css';
import {LangContext} from "../Components/LangContext";

const Contacts = () => {
    const [email, setEmail] = useState("");
    const [feedback, setFeedback] = useState("");
    const [validated, setValidated] = useState(false);
    const context = useContext(LangContext);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    return (
        <Container>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control
                        type="email"
                        placeholder={context.language === "eu" ? "Enter email" : "Введіть адресу електронної пошти"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        {context.language === "eu" ? "Please enter a valid email address." : "Будь ласка, введіть дійсну адресу електронної пошти."}
                    </Form.Control.Feedback>
                </Form.Group>
                <br/>
                <Form.Group controlId="formBasicFeedback">
                    <Form.Control as="textarea" rows={2}
                                  placeholder={context.language === "eu" ? "Enter feedback" : "Введіть відгук"}
                                  value={feedback}
                                  onChange={(e) => setFeedback(e.target.value)}
                                  required
                    />
                    <Form.Control.Feedback type="invalid">
                        {context.language === "eu" ? "Just enter your feedback" : "Просто введіть свій відгук"}
                    </Form.Control.Feedback>
                </Form.Group>
                <Button type="submit" className="mt-3">
                    {context.language === "eu" ? "Send" : "Надіслати"}
                </Button>
            </Form>
        </Container>
    );
};

export default Contacts;
