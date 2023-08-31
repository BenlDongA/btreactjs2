import Layout from "./layout";
import Layout1 from "./layout1";
function Sidebar(){
    return(
        <>
        <div className="sidebar">
        <Layout1 />
        <Layout />
        
       
        </div> 
        </>
    );
}

export default Sidebar;