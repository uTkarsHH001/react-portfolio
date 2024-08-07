import { FaCss3, FaGithub, FaLink, FaHtml5, FaReact} from "react-icons/fa";
import { TbBrandJavascript, TbApi, TbBrandNodejs, TbBrandMongodb } from 'react-icons/tb'
import { SiTailwindcss, SiExpress, SiSocketdotio } from 'react-icons/si'
import { MdOutlineManageHistory } from "react-icons/md";


import './Projects.css'
import paytm from '../../assets/projects/paytm.png'
import telegram from '../../assets/projects/telegram.png'
import colabsync from '../../assets/projects/colabsync.png'
import frans from '../../assets/projects/frans.png'
import weather from '../../assets/projects/weather.png'
import todo from '../../assets/projects/todo.png'
import password from '../../assets/projects/password.png'
import portfolio from '../../assets/projects/portfolio.png'
import huddle from '../../assets/projects/huddle.png'
import PropTypes from 'prop-types'

export default function Projects({projectsRef}) {
  return (
    <section id="projects" ref={projectsRef}>
      <h5>My work</h5>
      <h2>Projects</h2>

      <div className="container projectContainer">

        <div className="projectCard">
          <div className="img">
            <img src={paytm} height={100} alt="" />
          </div>
          <div className="techs">
            <FaReact /> <SiTailwindcss /> <SiExpress /> <TbBrandNodejs /> <TbBrandMongodb />
          </div>
          <p>Paytm Wallet</p>
          <div className="btns">
            <a target="_blank" href="https://paytm-wallet-olive.vercel.app/"><FaLink /> &nbsp;Live</a>
            <a target="_blank" href="https://github.com/uTkarsHH001/Paytm-Wallet"><FaGithub /> &nbsp;Github</a>
          </div>
        </div>

        <div className="projectCard">
          <div className="img">
            <img src={colabsync} alt="" />
          </div>
          <div className="techs">
            <FaReact /> <SiTailwindcss /> <SiExpress /> <TbBrandNodejs /> <SiSocketdotio />
          </div>
          <p>CoLabSync</p>
          <div className="btns">
            <a target="_blank" href="https://colabsync.netlify.app/"><FaLink /> &nbsp;Live</a>
            <a target="_blank" href="https://github.com/uTkarsHH001/colabsync"><FaGithub /> &nbsp;Github</a>
          </div>
        </div>

        <div className="projectCard">
          <div className="img">
            <img src={telegram} alt="" />
          </div>
          <div className="techs">
            <FaReact /> <SiTailwindcss /> <MdOutlineManageHistory />
          </div>
          <p>Telegram UI Clone</p>
          <div className="btns">
            <a target="_blank" href="https://web-tg.netlify.app/"><FaLink /> &nbsp;Live</a>
            <a target="_blank" href="https://github.com/uTkarsHH001/Telegram-App"><FaGithub /> &nbsp;Github</a>
          </div>
        </div>
        
        <div className="projectCard">
          <div className="img">
            <img src={frans} alt="" />
          </div>
          <div className="techs">
            <FaReact /> <SiTailwindcss />
          </div>
          <p>Frans Hals Museum Replica</p>
          <div className="btns">
            <a target="_blank" href="https://utkarshh001.github.io/Frans-Hals-Museum-Replica/"><FaLink /> &nbsp;Live</a>
            <a target="_blank" href="https://github.com/uTkarsHH001/Frans-Hals-Museum-Replica"><FaGithub /> &nbsp;Github</a>
          </div>
        </div>

        <div className="projectCard">
          <div className="img">
            <img src={weather} alt="" />
          </div>
          <div className="techs">
            <FaHtml5 /> <FaCss3 /> <TbBrandJavascript /> <TbApi />
          </div>
          <p>Weather Forecast App</p>
          <div className="btns">
            <a target="_blank" href="https://utkarshh001.github.io/Weather-App/"><FaLink /> &nbsp;Live</a>
            <a target="_blank" href="https://github.com/uTkarsHH001/Weather-App"><FaGithub /> &nbsp;Github</a>
          </div>
        </div>

        <div className="projectCard">
          <div className="img">
            <img src={todo} alt="" />
          </div>
          <div className="techs">
            <FaHtml5 /> <FaCss3 /> <TbBrandJavascript />
          </div>
          <p>To Do App</p>
          <div className="btns">
            <a target="_blank" href="https://utkarshh001.github.io/To-Do-List/"><FaLink /> &nbsp;Live</a>
            <a target="_blank" href="https://github.com/uTkarsHH001/To-Do-List"><FaGithub /> &nbsp;Github</a>
          </div>
        </div>

        <div className="projectCard">
          <div className="img">
            <img src={portfolio} alt="" />
          </div>
          <div className="techs">
            <FaHtml5 /> <FaCss3 /> <TbBrandJavascript />
          </div>
          <p>Personal Portfolio</p>
          <div className="btns">
            <a target="_blank" href=""><FaLink /> &nbsp;Live</a>
            <a target="_blank" href=""><FaGithub /> &nbsp;Github</a>
          </div>
        </div>

        <div className="projectCard">
          <div className="img">
            <img src={password} alt="" />
          </div>
          <div className="techs">
            <FaHtml5 /> <FaCss3 /> <TbBrandJavascript />
          </div>
          <p>Password Generator</p>
          <div className="btns">
            <a target="_blank" href="https://utkarshh001.github.io/Password-Generator/"><FaLink /> &nbsp;Live</a>
            <a target="_blank" href="https://github.com/uTkarsHH001/Password-Generator"><FaGithub /> &nbsp;Github</a>
          </div>
        </div>

        <div className="projectCard">
          <div className="img">
            <img src={huddle} alt="" />
          </div>
          <div className="techs">
            <FaHtml5 /> <FaCss3 />
          </div>
          <p>Huddle Landing Page</p>
          <div className="btns">
            <a target="_blank" href="https://utkarshh001.github.io/Huddle-Landing-Page/"><FaLink /> &nbsp;Live</a>
            <a target="_blank" href="https://github.com/uTkarsHH001/Huddle-Landing-Page"><FaGithub /> &nbsp;Github</a>
          </div>
        </div>
      </div>
    </section>
  )
}


Projects.propTypes = {
  projectsRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};