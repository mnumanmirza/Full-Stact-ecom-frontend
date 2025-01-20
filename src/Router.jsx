import { createBrowserRouter } from "react-router"
import VideoListingCard from "./Components/VideoListingCard"
import Loginpage from "./Components/Loginpage"
import Registerpage from "./Components/Registerpage"
// import Registerpage from './Components/Registerpage'
// import Loginpage from './Components/Loginpage'
// import SideBar from './Components/SideBar'
// import Header from './Components/Header'
// import EmptyVideoPage from './Components/EmptyVideoPage'
// import VideoListingCard from './Components/VideoListingCard'
// import VideoListPage from './Components/VideoListPage'
// import VideoDetailpage from './Components/VideoDetailpage'
// import ChanelVideolist from './ChanelVideolist'
// import ChanelEmptyvideopg from './Components/ChanelEmptyvideopg'
// import ChanelEmptyplaylist from './Components/ChanelEmptyplaylist'
// import ChanelPlaylistpg from './Components/ChanelPlaylistpg'
// import ChanelPlaylistVideopg from './Components/ChanelPlaylistVideopg'
// import ChanelEmptyTweetpg from './Components/ChanelEmptyTweetpg'
// import ChanelTweetpage from './Components/ChanelTweetpage'
// import EmpySubscribpg from './Components/EmpySubscribpg'
// import ChanelSubscribeList from './Components/ChanelSubscribeList'
// import MyChanelEmptypg from './Components/MyChanelEmptypg'
// import UploadVideopopup from './Components/UploadVideopopup'
// import UploadingVideoPopup from './Components/UploadingVideoPopup'
// import UploadvideoSucessful from './Components/UploadvideoSucessful'
// import MychanelemptyTweetpg from './Components/MuchanelemptyTweetpg'
// import Mychaneltweetpg from './Components/Mychaneltweetpg'
// import Editpersonalinfo from './Components/Editpersonalinfo'
// import Editchanelinfopg from './Components/Editchanelinfopg'
// import Changepasswordpg from './Components/Changepasswordpg'
// import AdminDashboardpg from './Components/AdminDashboardpg'
// import EditDashbordvideopopup from './Components/EditDashbordvideopopup'
// import DeletDashbordvideopopup from './DeletDashbordvideopopup'
// import PricvacyPolicypg from './Components/PricvacyPolicypg'
// import TermsCondition from './Components/TermsCondition'
// import ChanelPlaylistpg from './Components/ChanelPlaylistpg'
// import Loginpage from './Components/Loginpage'



export const router = createBrowserRouter([
    {
        path:'/',
        Component:App,
        children:[
            {
                path:'',
                Component:VideoListingCard
            },
            {
                path:'Loginpage',
                Component:Loginpage
            },
            {
                path:'Registerpage',
                Component:Registerpage
            },
        ]
    }
])
