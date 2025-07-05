import './Pages.css';
const skills = [
  { name: 'HTML', src: process.env.PUBLIC_URL + '/html.png' },
  { name: 'CSS', src: process.env.PUBLIC_URL + '/css.png' },
  { name: 'Bootstrap', src: process.env.PUBLIC_URL + '/bootstrap.png' },
  { name: 'Javascript', src: process.env.PUBLIC_URL + '/js.png' },
  { name: 'jQuery', src: process.env.PUBLIC_URL + '/jquery.png' },
  { name: 'React', src: process.env.PUBLIC_URL + '/react.png' },
  { name: 'Redux', src: process.env.PUBLIC_URL + '/redux.png' },
  { name: 'Php', src: process.env.PUBLIC_URL + '/php.png' },
  { name: 'Sql', src: process.env.PUBLIC_URL + '/sql.png' },
];

// const tools = [
//     {name: 'vs code', src:require('../assets/tools/vscode.png')},
//     {name: 'postman', src:require('../assets/tools/postman.png')}
// ]

function Skills() {
    return(
            <div className="skills-container page-content">
                <div>
                    <h2>Skills</h2>
                    <div className="skills-cube">
                    {skills.map((skill) => (
                        <div key={skill.name} className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                            <img src={skill.src} alt={skill.name} className="skill-logo" />
                            </div>
                            <div className="flip-card-back">
                            <h6>{skill.name}</h6>
                            </div>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
                {/* <div className='mt-5'>
                    <h1>Tools</h1>
                    <div className='logos'>
                        {tools.map((tool) => (
                            <div key={tool.name} style={{textAlign: 'center'}}>
                                <img src={tool.src} alt={tool.name} className='skill-logo'/>
                            </div>
                        ))}
                    </div>
                </div> */}
            </div>
    )
}
export default Skills;