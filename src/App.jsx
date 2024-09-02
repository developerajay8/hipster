
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/website/Home';
import Who_we_are from './pages/website/Who_we_are';
import Services from './pages/website/Services';
import Contact from './pages/website/Contact';
import WebsiteMain from './pages/website/main';
import Our_Works from './pages/website/Our_works';
import Web_Development from './pages/website/Web_Development';
import Mobile_App_Development from './pages/website/Mobile_App_Development';
import UIUX_Design from './pages/website/UIUX_Design';
import Software_Development from './pages/website/Software_Development';
import O_T_H_P from './pages/website/O_T_H_P';
import Process from './pages/website/Process';
import Career from './pages/website/Career';
import Blog from './pages/website/Blog';
import Clients from './pages/website/Clients';
import Near from './pages/website/Near';
import ShareApp from './pages/website/ShareApp';
import CommonSuits from './pages/website/CommonSuits';
import Abroadly from './pages/website/Abroadly';
import Case from './pages/website/Case';
import BlogOne from './pages/website/BlogOne';
import Trendsigapor from './pages/website/Trendsigapor';
import Usefultool from './pages/website/Usefultool';
import Startup from './pages/website/Startup';
import Applaunch from './pages/website/Applaunch';
import CustomberCenter from './pages/website/CustomberCenter';
import SoftwareDev from './pages/website/SoftwareDev';
import Mvpdigital from './pages/website/Mvpdigital';
import Codelow from './pages/website/Codelow';
import SustaibleTec from './pages/website/SustaibleTec';
import EventManagement from './pages/website/EventManagement';
import Healthcare from './pages/website/Healthcare';
import Entrepreneur from './pages/website/Entrepreneur';
import Wireframing from './pages/website/Wireframing';
import Progressive from './pages/website/Progressive';
import NewAppIs from './pages/website/NewAppIs';
import VirtualReality from './pages/website/VirtualReality';
import BarePack from './pages/website/BarePack';
import DigitalTrans from './pages/website/DigitalTrans';
import RedStp from './pages/website/RedStp';
import CrucialSeo from './pages/website/CrucialSeo';
import Softwaredeveloper from './pages/website/Softwaredeveloper';
import Speedsite from './pages/website/Speedsite';
import HybirdApp from './pages/website/HybirdApp';
import Appfor from './pages/website/Appfor';
import Automationtesting from './pages/website/Automationtesting';
import Gamifyapp from './pages/website/Gamifyapp';
import Launching from './pages/website/Launching';
import DjangovsRails from './pages/website/DjangovsRails';
import PickRight from './pages/website/PickRight';
import Siximage from './pages/website/Siximage';
import Ios14 from './pages/website/Ios14';
import Makemobile from './pages/website/Makemobile';
import Artificialinteligence from './pages/website/Artificialinteligence';
import PWA from './pages/website/PWA';
import Booksread from './pages/website/Booksread';
import Responsivedesign from './pages/website/Responsivedesign';
import Outlear from './pages/website/Outlear';
import Blockchain from './pages/website/Blockchain';
import Nhapp from './pages/website/Nhapp';
import Blogmultiple from './pages/website/Blogmultiple';
import Androidapp from './pages/website/Androidapp';
import Iosapp from './pages/website/Iosapp';
import Hiremobile from './pages/website/Hiremobile';
import AppDevelopment from './pages/website/AppDevelopment';
import WebDesign from './pages/website/WebDesign';
import CostDevelop from './pages/website/CostDevelop';
import Designbackend from './pages/website/designBackend';
import TransformationExmaple from './pages/website/transaformation';
import Productivity from './pages/website/Productvitiy';
import Positioning from './pages/website/positioning';
import Manageproject from './pages/website/manageproject';
import Techstartup from './pages/website/Techstartup';
import Technologyimp from './pages/website/Technologyimp';
import PandemicProof from './pages/website/PandemicProof';
import DigitalTras from './pages/website/DigitalTras';
import Managsolution from './pages/website/Managsolution';
import SoftwareTester from './pages/website/SoftwareTester';
import MinimunProduct from './pages/website/MinimunProduct';
import Seostrategy from './pages/website/Seostrategy';
import Intelligence from './pages/website/Intelligence';
import Physicleteam from './pages/website/Physicleteam';
import Webdesi from './pages/website/Webdesi'
import { Ajay } from './assets';
import Digitalsolution from './pages/website/Digitalsolution';
import Technologic from './pages/website/Technologic';
import HiddenCategories from './pages/website/HiddenCategories';
import Thinking from './pages/website/Thinking';
import Tips from './pages/website/Tips';
import Newlaunch from './pages/website/Newlaunch';
import Artint from './pages/website/Artint';
import NvsHibirid from './pages/website/NvsHibirid';
import Alotool from './pages/website/Alotool';
import Acecard from './pages/website/Acecard';
import Teorra from './pages/website/Teorra';
import Bettrcoffee from './pages/website/Bettrcoffee';
import Vesqr from './pages/website/Vesqr';
import Z4ip from './pages/website/Z4ip';
import AccesetSingapore from './pages/website/AccesetSingapore';
import Barebottom from './pages/website/Barebottom';
import Kwsh from './pages/website/Kwsh';
import Min_tutor from './pages/website/Min_tutor';
import Tueetoredutech from './pages/website/Tueetoredutech';
import Renonation from './pages/website/Renonation';
import Somethingnew from './pages/website/Somethingnew';
import Wsg from './pages/website/Wsg';
import Hybridems from './pages/website/Hybridems';
import Lhommes from './pages/website/Lhommes';
import Productdesign from './pages/website/Productdesign';
import Othertechnoliges from './pages/website/Othertechnoliges';

function App() {
  const routes = createBrowserRouter(
    [
      {
        path:"/",
        element:<WebsiteMain/>,
        children: [
          {
            path:"/",
            element:<Home/>
          },
          {
            path:"ourwork",
            element:<Our_Works/>
          },
          {
            path:"whoweare",
            element:<Who_we_are/>
          },
          {
            path:"services",
            element:<Services/>
          },
          {
            path:"contact",
            element:<Contact/>
          },
          {
            path:"webdevelopment",
            element:<Web_Development/>
          },
          {
            path:"mobileappdevelopment",
            element:<Mobile_App_Development/>
          },
          {
            path:"uiuxdesign",
            element:<UIUX_Design/>
          }
          ,
          {
            path:"softwaredevelopment",
            element:<Software_Development/>
          },
          {
            path:"offtheshelfproducts",
            element:<O_T_H_P/>
          },
          {
            path:"process",
            element:<Process/>
          },
          {
            path:"clients",
            element:<Clients/>
          },
          {
            path:"career",
            element:<Career/>
          },
          {
            path:"blog",
            element:<Blog/>
          },
          {
            path:"near",
            element:<Near/>
          },
          {
            path:"shareapp",
            element:<ShareApp/>
          },
          {
            path:"commonsuits",
            element:<CommonSuits/>
          },
          {
            path:"abroadly",
            element:<Abroadly/>
          },
          {
            path:"case",
            element:<Case/>
          }
          ,
          {
            path:"blogone",
            element:<BlogOne/>
          },
          {
            path:"trendsigapor",
            element:<Trendsigapor/>
          },
          {
            path:"usefultool",
            element:<Usefultool/>
          },
          {
            path:"startup",
            element:<Startup/>
          }
          ,
          {
            path:"applaunch",
            element:<Applaunch/>
          }
          ,
          {
            path:"custombercenter",
            element:<CustomberCenter/>
          }
          ,
          {
            path:"softwaredev",
            element:<SoftwareDev/>
          }
          ,
          {
            path:"mvpdigital",
            element:<Mvpdigital/>
          },
          {
            path:"codelow",
            element:<Codelow/>
          },
          {
            path:"sustaibletec",
            element:<SustaibleTec/>
          },
          {
            path:"eventmanagement",
            element:<EventManagement/>
          }
          ,
          {
            path:"healthcare",
            element:<Healthcare/>
          }
          ,
          {
            path:"entrepreneur",
            element:<Entrepreneur/>
          }
          ,
          {
            path:"wireframing",
            element:<Wireframing/>
          }
          ,
          {
            path:"progressive",
            element:<Progressive/>
          },
          {
            path:"newappis",
            element:<NewAppIs/>
          },
          {
            path:"virtualreality",
            element:<VirtualReality/>
          },
          {
            path:"barepack",
            element:<BarePack/>
          },
          {
            path:"digitaltrans",
            element:<DigitalTrans/>
          }
          ,
          {
            path:"redstp",
            element:<RedStp/>
          },
          {
            path:"crucialseo",
            element:<CrucialSeo/>
          },
          {
            path:"softwaredeveloper",
            element:<Softwaredeveloper/>
          },
          {
            path:"speedsite",
            element:<Speedsite/>
          },
          {
            path:"hybirdapp",
            element:<HybirdApp/>
          },
          {
            path:"appfor",
            element:<Appfor/>
          },
          {
            path:"automationtesting",
            element:<Automationtesting/>
          },
          {
            path:"gamifyapp",
            element:<Gamifyapp/>
          },
          {
            path:"launching",
            element:<Launching/>
          },
          {
            path:"djangovsrails",
            element:<DjangovsRails/>
          },
          {
            path:"pickright",
            element:<PickRight/>
          },
          {
            path:"siximage",
            element:<Siximage/>
          },
          {
            path:"ios14",
            element:<Ios14/>
          },
          {
            path:"makemobile",
            element:<Makemobile/>
          },
          {
            path:"artificialinteligence",
            element:<Artificialinteligence/>
          },
          {
            path:"pwa",
            element:<PWA/>
          },
          {
            path:"booksread",
            element:<Booksread/>
          },
          {
            path:"responsivedesign",
            element:<Responsivedesign/>
          },
          {
            path:"outlear",
            element:<Outlear/>
          },
          {
            path:"blackchain",
            element:<Blockchain/>
          },
          {
            path:"nhapp",
            element:<Nhapp/>
          },
          {
            path:"blogmultiple",
            element:<Blogmultiple/>
          },
          {
            path:"androidapp",
            element:<Androidapp/>
          },
          {
            path:"iosapp",
            element:<Iosapp/>
          },
          {
            path:"hiremobile",
            element:<Hiremobile/>
          },
          {
            path:"appdevelopment",
            element:<AppDevelopment/>
          },
          {
            path:"webdesign",
            element:<WebDesign/>
          },
          {
            path:"costdevelop",
            element:<CostDevelop/>
          },
          {
            path:"designbackend",
            element:<Designbackend/>
          },
          {
            path:"transformationexmaple",
            element:<TransformationExmaple/>
          },{
            path:"productivity",
            element:<Productivity/>
          },{
            path:"positioning",
            element:<Positioning/>
          },{
            path:"manageproject",
            element:<Manageproject/>
          },{
            path:"techstartup",
            element:<Techstartup/>
          },{
            path:"technologyimp",
            element:<Technologyimp/>
          },{
            path:"pandemicproof",
            element:<PandemicProof/>
          },{
            path:"digitaltras",
            element:<DigitalTras/>
          },{
            path:"managsolution",
            element:<Managsolution/>
          },{
            path:"softwaretester",
            element:<SoftwareTester/>
          },{
            path:"minimunproduct",
            element:<MinimunProduct/>
          },{
            path:"seostrategy",
            element:<Seostrategy/>
          },{
            path:"intelligence",
            element:<Intelligence/>
          },{
            path:"physicleteam",
            element:<Physicleteam/>
          },{
            path:"webdesi",
            element:<Webdesi/>
          },{
            path:"digitalsolution",
            element:<Digitalsolution/>
          },{
            path:"technologic",
            element:<Technologic/>
          },{
            path:"hiddencategories",
            element:<HiddenCategories/>
          },{
            path:"thinking",
            element:<Thinking/>
          },{
            path:"tips",
            element:<Tips/>
          },{
            path:"newlaunch",
            element:<Newlaunch/>
          },{
            path:"artint",
            element:<Artint/>
          },{
            path:"nvshibirid",
            element:<NvsHibirid/>
          },{
            path:"alotool",
            element:<Alotool/>
          },{
            path:"acecard",
            element:<Acecard/>
          },{
            path:"teorra",
            element:<Teorra/>
          },{
            path:"bettrcoffee",
            element:<Bettrcoffee/>
          },{
            path:"vesqr",
            element:<Vesqr/>
          },{
            path:"z4ip",
            element:<Z4ip/>
          },{
            path:"accesetsingapore",
            element:<AccesetSingapore/>
          },{
            path:"barebottom",
            element:<Barebottom/>
          },{
            path:"kwsh",
            element:<Kwsh/>
          },{
            path:"mintutor",
            element:<Min_tutor/>
          },{
            path:"tueetoredutech",
            element:<Tueetoredutech/>
          },{
            path:"renonation",
            element:<Renonation/>
          },{
            path:"somethingnew",
            element:<Somethingnew/>
          },{
            path:"wsg",
            element:<Wsg/>
          },{
            path:"hybridems",
            element:<Hybridems/>
          },{
            path:"lhommes",
            element:<Lhommes/>
          },{
            path:"productdesign",
            element:<Productdesign/>
          },{
            path:"othertechnoliges",
            element:<Othertechnoliges/>
          }
        ]
      }
    ]
  )
  return (
    <RouterProvider router={routes}/>
  );
}

export default App;
