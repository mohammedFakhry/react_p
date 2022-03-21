import { configureStore } from '@reduxjs/toolkit'
import InfoSlice from './InfoSlice'


const store = configureStore({
    reducer: { InfoSlice },
})

export default store