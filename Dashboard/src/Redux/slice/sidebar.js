
import {createSlice} from '@reduxjs/toolkit';

// import {dispatch} from '../store';

const initialState={
    navbar:true,
    ScreenSize:0
}

const slice=createSlice({
    name:'sidebar',
    initialState:initialState,
    reducers:{
          toggleSidebar(state,action){
            state.navbar=action.payload;
            
          },
          
          updateScreenSize(state,action){
               state.ScreenSize=action.payload;
          }
          

    }
})

   export default slice.reducer;
   
export const {toggleSidebar} =slice.actions; 
export const {updateScreenSize}=slice.actions;
//    export function ToggleSideBar(){
//        return async()=>{
//             dispatch(slice.actions.toggleSidebar());
//        }
//    }
//    export function UpdateScreenSize(ScreenSize){
//          return async()=>{
//             dispatch(slice.actions.updateScreenSize(ScreenSize))
//          }
//    }
//     export  const  UpdateSideBarType =(screen)=>{
//       return async()=>{
//         dispatch(slice.actions.updateSidebarType(screen));
//       }
//      }




