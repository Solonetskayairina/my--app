    import React, { useState } from "react";

    import Header from "./components/header/header";
    import LeftMenu from "./components/leftMenu/leftMenu";
    import Container from "./components/container/container";
    import Container2 from "./components/container/container2";
    export default function App () {

        const [activeComponent, setActiveComponent] = useState("Container");

        const handleMenuClick = (component) => {
            setActiveComponent(component);
        };

        return (
          <div>
             <Header />
             <LeftMenu onMenuClick={handleMenuClick} />
             {activeComponent === "Container" && <Container />}
             {activeComponent === "Container2" && <Container2 />}
          </div>
        )
    }