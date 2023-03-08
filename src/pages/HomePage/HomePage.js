import { Header } from "./styled.js";
import { Timeline } from "./styled.js";
import { Home } from "./styled.js";
import { ContainerToPost } from "./styled.js";
import { ContainerPost } from "./styled.js";
import { Trendings } from "./styled.js";
import { SiteLink } from "./styled.js";
import { DescriptionPost } from "./styled.js";
import { InfoPost } from "./styled.js";
import { AiOutlineDown } from "react-icons/ai";

export default function HomePage(){
    return (
        <>
            <Header>
                <h1>linkr</h1>
                <div>
                    <AiOutlineDown className="icon-white"/>
                    <img src={"oi"} />
                </div>
            </Header>
        {/* teste */}
        <Home>
            <Timeline>
                <section>
                    <p>Timeline</p>
                </section>

                <ContainerToPost>
                    <div>
                        <img src={"img"} />
                    </div>

                    <main>
                        <h1>What are you going to share today?</h1>
                        <form>
                            <SiteLink placeholder="http://..." />
                            <DescriptionPost placeholder="Awesome article about #javascript" />
                            <button>
                                Publish
                            </button>
                        </form>
                        
                    </main>
                </ContainerToPost>

                <ContainerPost>
                    <div>
                        <img src={"img"} />
                    </div>

                    <InfoPost>
                        <h1>Juvenal Juvêncio </h1>
                        <p>Muito maneiro esse tutorial de Material UI com React, deem uma olhada!</p>
                        <div>
                            link
                        </div>
                    </InfoPost>
                </ContainerPost>
            </Timeline>

            <Trendings>
            </Trendings>
        </Home>
            
        </>
    )
    
}