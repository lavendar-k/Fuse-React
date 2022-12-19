import { createSlice } from '@reduxjs/toolkit';

const sidebarsSlice = createSlice({
  name: 'chatApp/sidebars',
  initialState: {
    mobileChatsSidebarOpen: false,
    userSidebarOpen: false,
    contactSidebarOpen: false,
  },
  reducers: {
    openMobileChatsSidebar: (state, action) => {
      state.mobileChatsSidebarOpen = true;
    },
    closeMobileChatsSidebar: (state, action) => {
      state.mobileChatsSidebarOpen = false;
    },
    openUserSidebar: (state, action) => {
      state.userSidebarOpen = true;
    },
    closeUserSidebar: (state, action) => {
      state.userSidebarOpen = false;
    },
    openContactSidebar: (state, action) => {
      state.contactSidebarOpen = true;
    },
    closeContactSidebar: (state, action) => {
      state.contactSidebarOpen = false;
    },
  },
});

export const {
  openMobileChatsSidebar,
  closeMobileChatsSidebar,
  openUserSidebar,
  closeUserSidebar,
  openContactSidebar,
  closeContactSidebar,
} = sidebarsSlice.actions;

export default sidebarsSlice.reducer;
