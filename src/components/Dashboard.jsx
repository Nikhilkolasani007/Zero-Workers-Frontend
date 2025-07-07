import { House } from 'lucide-react';
import { LayoutGrid } from 'lucide-react';
import { BrainCog } from 'lucide-react';
import { Store } from 'lucide-react';
import { Pencil } from 'lucide-react';
import { FileUp } from 'lucide-react';
import { Bolt } from 'lucide-react';
import { AtSign } from 'lucide-react';
import { ChevronsDown } from 'lucide-react';
import { Gauge } from 'lucide-react';
import { DatabaseZap } from 'lucide-react';
import { ChartNetwork } from 'lucide-react';
import { Bubbles } from 'lucide-react';
import { Building2 } from 'lucide-react';
import { Pickaxe } from 'lucide-react';
import { BrainCircuit } from 'lucide-react';
import "./Dashboard.css"
function Dashboard() {
    let name = ""
    let custom_profile_logo = <img src="" alt=""/>
    let default_profile_logo = <img src="" alt=""/>
    let enterprise_logo = "- Dev Community"
    let useremail = "kolasani2@gmail.com"
    let plan = "REGULAR DIRECTORY"
    let profile_img = <img src="src\assets\passport 2-07-2024 (1).jpg" alt="" />
    let Page_name = "Home Page"
    return(
        <>
        <div className="header">
            <div className="left">
            <button className="menu"><span className="material-symbols-outlined">apps</span></button>
            <h1 className="title">Zero Workers {enterprise_logo}</h1>
            </div>
            
            <div className="right">
                <button className="ai">Ask Vyasa</button>
                <div className="profile">
                    <div className="profile_email">
                    {useremail} <br />
                    {plan}
                </div>
                <div className="profile_img">
                    {profile_img}
                </div>
                </div>
            </div>
        </div>
        <div className="menu_plus_desc">
        <div className="menu_bar">
            <div className="border">
                <div className="appset">
                    <button className='appicon'><House size={30}  className='appicon'/></button>
                    <p className='appname'>Home</p>
                </div>
                <div className="appset">
                    <button className='appicon'><LayoutGrid size={30}  className='appicon'/></button>
                    <p className='appname'>Apps</p>
                </div>
                <div className="appset">
                    <button className='appicon'><BrainCog size={30}  className='appicon'/></button>
                    <p className='appname'>Ai Hub</p>
                </div>
                <div className="appset">
                    <button className='appicon'><Store size={30}  className='appicon'/></button>
                    <p className='appname'>Store</p>
                </div>
                <div className="appset">
                    <button className='appicon'><Pencil size={30}  className='appicon'/></button>
                    <p className='appname'>Draw iT</p>
                </div>
                <div className="appset">
                    <button className='appicon'><FileUp size={30}  className='appicon'/></button>
                    <p className='appname'>My Files</p>
                </div>
                <div className="appset">
                    <button className='appicon'><AtSign size={30}  className='appicon'/></button>
                    <p className='appname'>Text</p>
                </div>
                <div className="appset">
                    <button className='appicon'><Bolt size={30}  className='appicon'/></button>
                    <p className='appname'>Settings</p>
                </div>
            </div>
        </div>
        <div className="white-board">
            <div className="page_name"><h1>{Page_name}</h1></div>
        </div>
        </div>

        <div className="apps">
            <div className="app_border">
                <div className="appset">
                    <button className='appicon'><ChevronsDown   size={30}  className='appicon'/></button>
                    <p className='appname'></p>
                </div>
                <div className="appset">
                    <button className='appicon'><Gauge   size={30}  className='appicon'/></button>
                    <p className='appname'>Monitor</p>
                </div>
                <div className="appset">
                    <button className='appicon'><DatabaseZap   size={30}  className='appicon'/></button>
                    <p className='appname'>Mota  DB</p>
                </div>
                <div className="appset">
                    <button className='appicon'><ChartNetwork   size={30}  className='appicon'/></button>
                    <p className='appname'>Analyst</p>
                </div>
                <div className="appset">
                    <button className='appicon'><Bubbles   size={30}  className='appicon'/></button>
                    <p className='appname'>ETL/ELT</p>
                </div>
                <div className="appset">
                    <button className='appicon'><Building2   size={30}  className='appicon'/></button>
                    <p className='appname'>BI Tool</p>
                </div>
                <div className="appset">
                    <button className='appicon'><Pickaxe   size={30}  className='appicon'/></button>
                    <p className='appname'>ReBuild</p>
                </div>
                <div className="appset">
                    <button className='appicon'><BrainCircuit   size={30}  className='appicon'/></button>
                    <p className='appname'>Vyas AI</p>
                </div>
            </div>
        </div>
        
        </>
    );
};
export default Dashboard;