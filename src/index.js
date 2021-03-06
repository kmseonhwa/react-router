import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import Expenses from "./routes/expenses";
import Invoice from "./routes/invoice";
import Invoices from "./routes/invoices";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="expenses" element={<Expenses />} />
                <Route path="invoices" element={<Invoices />}>
                    <Route
                        index
                        element={
                            <main>
                                <p>Select an invoice!</p>
                            </main>
                        }
                    />
                    <Route path=":invoiceId" element={<Invoice />} />
                </Route>
                <Route path="*" element={<p>No Math</p>} />
            </Route>
        </Routes>
    </BrowserRouter>,
    rootElement
);
