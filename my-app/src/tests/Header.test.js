import {render, screen, fireEvent} from '@testing-library/react';
import Header from '../Header';
import {LangContext} from "../Components/LangContext";
import {useContext} from "react";
import React from "react";

describe("Header", () => {
    test("renders login button", () => {
        render(
            <LangContext.Provider value={{language: "eu", setLanguage: jest.fn()}}>
                <Header/>
            </LangContext.Provider>
        );
        const loginButton = screen.getByText(/login/i);
        expect(loginButton).toBeInTheDocument();
    });

    test("opens modal on login button click", () => {
        render(
            <LangContext.Provider value={{language: "eu", setLanguage: jest.fn()}}>
                <Header/>
            </LangContext.Provider>
        );
        const loginButton = screen.getByText(/login/i);
        fireEvent.click(loginButton);
        const modalTitle = screen.getByText(/log in/i);
        expect(modalTitle).toBeInTheDocument();
    });

    test("renders language select", () => {
        render(
            <LangContext.Provider value={{language: "eu", setLanguage: jest.fn()}}>
                <Header/>
            </LangContext.Provider>
        );
        const languageSelect = screen.getByLabelText(/default select example/i);
        expect(languageSelect).toBeInTheDocument();
    });

    test("changes language on select change", () => {
        render(
            <LangContext.Provider value={{language: "eu", setLanguage: jest.fn()}}>
                <Header/>
            </LangContext.Provider>
        );
        const languageSelect = screen.getByLabelText(/default select example/i);
        fireEvent.change(languageSelect, {target: {value: "ua"}});
        expect(languageSelect.value).toBe("ua");
    });

    test("disables submit button when form is invalid", () => {
        render(
            <LangContext.Provider value={{language: "eu", setLanguage: jest.fn()}}>
                <Header/>
            </LangContext.Provider>
        );
        const loginButton = screen.getByText(/login/i);
        fireEvent.click(loginButton);
        const submitButton = screen.getByRole("button", {name: /send/i});
        expect(submitButton).toBeDisabled();
    });

    test("enables submit button when form is valid", () => {
        render(
            <LangContext.Provider value={{language: "eu", setLanguage: jest.fn()}}>
                <Header/>
            </LangContext.Provider>
        );
        const loginButton = screen.getByText(/login/i);
        fireEvent.click(loginButton);

        const emailInput = screen.getByPlaceholderText(/enter email/i);
        fireEvent.change(emailInput, {target: {value: "test@example.com"}});

        const passwordInput = screen.getByPlaceholderText(/enter password/i);
        fireEvent.change(passwordInput, {target: {value: "password"}});

        const submitButton = screen.getByRole("button", {name: /send/i});
        expect(submitButton).toBeEnabled();
    });
});

