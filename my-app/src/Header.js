import {Navbar, Nav, FormControl, Container, Form, Button, Modal} from "react-bootstrap";
import React, {useState, useEffect, useContext} from "react";
import './css/App.css';
import {LangContext} from "./Components/LangContext";

const Header = () => {
    const context = useContext(LangContext);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [emailError, setEmailError] = useState((context.language === "eu" ? "Email cannot be empty" : "Поле електронної пошти не може бути пустим"));
    const [passwordError, setPasswordError] = useState((context.language === "eu" ? "Password cannot be empty" : "Поле пароль не може бути пустим"));
    const [formValid, setFormValid] = useState(false);
    const emailHandler = (e) => {
        setEmail(e.target.value);
        const re =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!re.test(String(e.target.value.toLowerCase()))) {
            setEmailError(context.language === "eu" ? "Incorrect email" : "Неправильна електронна адреса");
        } else {
            setEmailError("");
        }
    };

    const passwordHandler = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 3 || e.target.length > 8) {
            setPasswordError(context.language === "eu" ? "The password must have at least 3 and no more than 8 characters" : "Пароль повинен містити не менше 3 і не більше 8 символів");
            if (!e.target.value) {
                setPasswordError(context.language === "eu" ? "Password cannot be empty" : "Пароль не може бути пустим");
            }
        } else {
            setPasswordError("");
        }
    };

    const blurHandler = (e) => {
        switch (e.target.name) {
            case "email":
                setEmailDirty(true);
                break;
            case "password":
                setPasswordDirty(true);
                break;
        }
    };

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [emailError, passwordError]);

    return (
        <>

            <Button className="" onClick={handleShow}>
                {context.language === "eu" ? "Login" : "Вхід"}
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{context.language === "eu" ? "Log in" : "Aвторизуватися"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="fromBasicEmail">
                            <Form.Label>{context.language === "eu" ? "Email Address" : "Адреса електронної пошти"}</Form.Label>
                            {emailDirty && emailError && (
                                <div style={{color: "red"}}>{emailError}</div>
                            )}
                            <Form.Control
                                onChange={(e) => emailHandler(e)}
                                name="email"
                                value={email}
                                onBlur={(e) => blurHandler(e)}
                                type="email"
                                placeholder={context.language === "eu" ? "Enter email" : "Введіть адресу електронної пошти"}
                            />
                            <Form.Text className="text-muted">
                                {context.language === "eu" ? "We'll never share your email with anyone else." : "Ми ніколи нікому не передамо вашу електронну адресу."}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="fromBasicPassword">
                            <Form.Label>{context.language === "eu" ? "Password" : "Пароль"}</Form.Label>
                            {passwordError && passwordDirty && (
                                <div style={{color: "red"}}>{passwordError}</div>
                            )}
                            <Form.Control
                                onChange={(e) => passwordHandler(e)}
                                name="password"
                                value={password}
                                onBlur={(e) => blurHandler(e)}
                                type="password"
                                placeholder={context.language === "eu" ? "Enter password" : "Введіть пароль"}
                            />
                        </Form.Group>
                        <Form.Group controlId="fromBasicCheckbox">
                            <Form.Check type="checkbox"
                                        label={context.language === "eu" ? "Remember me" : "Запам'ятати мене"}/>
                        </Form.Group>
                        <Button disabled={!formValid} variant="primary" type="submit">
                            {context.language === "eu" ? "Send" : "Відправити"}
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
            <Form.Select
                aria-label="Default select example"
                style={{
                    width: "200px",
                    display: "inline"
                    // marginRight: "155px",
                    // marginLeft: "-4px"
                }}
                onChange={(e) => {
                    context.setLanguage(e.target.value);
                }}
            >
                <option value="eu">English</option>
                <option value="ua">Українська</option>
            </Form.Select>
        </>
    );
};
export default Header;