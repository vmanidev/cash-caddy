import type { MenuItems } from "../models/sidebar";

export const menuItems: MenuItems[] = [{
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    state: "app.dashboard"
}, {
    key: "transactions",
    label: "Transactions",
    path: "/transactions",
    state: "app.transactions"
}, {
    key: "categories",
    label: "Categories",
    path: "/categories",
    state: "app.categories"
}, {
    key: "settings",
    label: "Settings",
    path: "/settings",
    state: "app.settings"
}]