import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  configName: 'config-1',
  botName: 'Greebo',
  fontFamily: "'Space Grotesk', sans-serif",
  headerColor: '#E63A1E',
  headerFontColor: '#FFFFFF',
  backgroundColor: '#E8E1DB',
  chatFontColor: '#323130',
  avatarImage: '/default-avatar.png',
  launcherImage: '/default-launcher.png',
};

export const widgetSlice = createSlice({
  name: 'widget',
  initialState,
  reducers: {
    updateConfig: (state, action) => {
      return { ...state, ...action.payload };
    },
    loadConfig: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateConfig, loadConfig } = widgetSlice.actions;
export default widgetSlice.reducer;

