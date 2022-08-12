import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import ItemList from "./ItemList";
import { Provider } from 'react-redux'
import { sitesReducer } from "../../reducers/sitesReducer";
import { combineReducers } from "redux";


describe("test ItemList", () => {

    let components
    const reducer = combineReducers({
        sitesStore: sitesReducer,
    })

    const store = configureStore({ reducer })

    const item = {
        createDate: "2022-08-11T14:42:41.679Z",
        description: "Página web de Nova",
        key: "testing1",
        name: "Novas2",
        path: "https://private.neox.atresmedia.com/",
        publicPath: "https://neox.atresmedia.com/1",
        site: "1660228961682",
        __v: 0,
        _id: "6274e62d51dd9c32d5143c0b",
    }

    beforeEach(() => {
        components = render(
            <Provider store={store}>
                <ItemList item={item} />
            </Provider>
        )
    })

    test('render ItemList', () => {
        const result = components.getByText(item.name)
        expect(result).not.toBeNull();
    })

    test('have delete button', () => {
        const result = components.getByText("Eliminar")
        expect(result).not.toBeNull();
    })
    test('have edit button', () => {
        const result = components.getByText("Editar")
        expect(result).not.toBeNull();
    })

})
