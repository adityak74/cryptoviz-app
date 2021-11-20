import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getCoinsAPI from '../../services/getCoins';

const coinsInitialValue = {
    coins: [],
    loading: false,
};

export const fetchCoins = createAsyncThunk(
    'coins/fetchCoins',
    async () => {
        const coins = await getCoinsAPI();
        return coins;
    },
);

const coinsSlice = createSlice({
    name: 'coins',
    initialState: coinsInitialValue,
    reducers: {
        setCoins: (state, action) => {

        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCoins.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCoins.fulfilled, (state, action) => {
                state.loading = false;
                state.coins = action.payload;
            })
    },
});

export default coinsSlice.reducer;
