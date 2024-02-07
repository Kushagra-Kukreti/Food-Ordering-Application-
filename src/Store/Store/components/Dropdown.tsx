
import{ useState } from "react";
import "../css/Dropdown.css"
import SelectedCategoryDropdown from "./SelectedCategoryDropdown";
import UnselectedCategoryDropdown from "./UnselectedCategoryDropdown";
type DropdownProps = {
    title: string;
    menuInfo: string[];
};

const Dropdown = ({ title, menuInfo }:DropdownProps) => {

    const [selected, setSelected] = useState<boolean>(false);

    if (selected) {
        return <SelectedCategoryDropdown title={title} setSelected={setSelected}/> 
    } else {
        return <UnselectedCategoryDropdown 
        title={title} 
        menuInfo={menuInfo} 
        setSelected ={setSelected}
        />
    }
    
};

export default Dropdown;
