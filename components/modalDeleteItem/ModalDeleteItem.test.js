import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux'
import { sitesReducer } from "../../reducers/sitesReducer";
import { combineReducers } from "redux";
import ModalDeleteItem from "./ModalDeleteItem";


describe("test ModalDeleteItem", () => {

    let components
    let ButtonOpen

    const reducer = combineReducers({
        sitesStore: sitesReducer,
    })

    const store = configureStore({ reducer })
    

    const item = {
        createDate: "2022-08-11T14:42:41.679Z",
        description: "Página web de Nova",
        key: "testing1",
        name: "nameItem",
        path: "https://private.neox.atresmedia.com/",
        publicPath: "https://neox.atresmedia.com/1",
        site: "1660228961682",
        __v: 0,
        _id: "6274e62d51dd9c32d5143c0b",
    }

    beforeEach(() => {
        components = render(
            <Provider store={store}>
                <ModalDeleteItem item={item}></ModalDeleteItem>
            </Provider>
        )
        ButtonOpen = components.getByText("Eliminar")
    })

    test('render button', () => {
        const result = components.getByText("Eliminar")
        expect(result).not.toBeNull();
    })
    
    test('render button SI', () => {
        fireEvent.click(ButtonOpen)
        const result = components.getByText("SI")
        expect(result).not.toBeNull();
    })

    test('render button Cancel', () => {
        fireEvent.click(ButtonOpen)
        const result = components.getByText("Cancelar")
        expect(result).not.toBeNull();
    })

    test('render name site', () => {
        fireEvent.click(ButtonOpen)
        const result = components.getByText( "¿Seguro que desea eliminar el Site: "+item.name+"?")
        expect(result).not.toBeNull();
    })
    test('check close modal', () => {
        //open modal
        fireEvent.click(ButtonOpen)
        const BtnCancel = components.getByText("Cancelar")
        //close modal
        fireEvent.click(BtnCancel)

        const result = components.getByText("SI")
        expect(result).not.toBeNull();
    })
})
