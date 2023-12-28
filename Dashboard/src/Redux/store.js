import { configureStore } from "@reduxjs/toolkit";

import sideBar from './slice/sidebar'

const store =configureStore({
    reducer:{
        users:sideBar,
    }
})

export default store;