import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
    ok: boolean;
    isAdmin: boolean;
    accessToken: string | null;
}

const initialState: UserState = {
    ok: false,
    isAdmin: false,
    accessToken: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: {
            reducer: (state, action: PayloadAction<UserState>) => {
                return action.payload;
            },
            prepare: (value: UserState) => {
                if (value) {
                    const {ok, isAdmin, accessToken} = value;
                    return { payload: { ok, isAdmin, accessToken }  };
                } else {
                    return { payload: { ok: false, isAdmin: false, accessToken: null}, };
                }
            },
        },
    },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
