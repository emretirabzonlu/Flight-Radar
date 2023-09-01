import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { options } from "./constans";

export const getFlightData = createAsyncThunk(
    "flights/getFlights",
    async () => {

        const res = await axios.request(options);

        const newData = res.data.aircraft.map((plane) => ({
            id: plane[0],
            code: plane[1],
            lat: plane[2],
            lng: plane[3]
        }));

        return newData;
    })

const initialState = {
    flights: [],
    flightsLoading: true,
    isError: false,
};

export const flightSlice = createSlice({
    name: "flightSlice",
    initialState,
    extraReducers: {

        [getFlightData.pending]: (state, action) => {
            state.flightsLoading = true;
         },

        [getFlightData.fulfilled]: (state, action) => {
            state.flights = action.payload;
            state.flightsLoading = false;
         },

        [getFlightData.rejected]: (state, action) => { 
            state.isError = true;
            state.flightsLoading = false;
        }

    }
});