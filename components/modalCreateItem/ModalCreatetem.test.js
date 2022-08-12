import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux'
import { sitesReducer } from "../../reducers/sitesReducer";
import { combineReducers } from "redux";
import ModalCreateItem from "./ModalCreateItem";


describe("test ModalDeleteItem", () => {

    let componentsNewItem
    let componentsWithItem
    let ButtonOpenNewItem
    let ButtonOpenWithItem

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
        componentsWithItem = render(
            <Provider store={store}>
                <ModalCreateItem item={item}></ModalCreateItem>
            </Provider>
        )
        componentsNewItem = render(
            <Provider store={store}>
                <ModalCreateItem></ModalCreateItem>
            </Provider>
        )
        ButtonOpenWithItem = componentsWithItem.getByText("Editar")
        ButtonOpenNewItem = componentsNewItem.getByText("Nuevo")
    })

    test('render button', () => {
        const result = componentsWithItem.getByText("Nuevo")
        expect(result).not.toBeNull();
    })
    
    test('render button Guardar', () => {
        fireEvent.click(ButtonOpenWithItem)
        const result = componentsWithItem.getByText("Guardar")
        expect(result).not.toBeNull();
    })

    test('render name input', () => {
        fireEvent.click(ButtonOpenWithItem)
        const result = componentsWithItem.getByText( "name:")
        expect(result).not.toBeNull();
    })
})
