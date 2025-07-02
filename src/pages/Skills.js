import './Pages.css';
const skills  = [
    {name: 'HTML', src: require('../assets/techstack/html.png')},
    {name: 'CSS', src: require('../assets/techstack/css.png')},
    {name: 'Bootstrap', src:require('../assets/techstack/bootstrap.png')},
    {name: 'Javascript', src:require('../assets/techstack/js.png')},
    {name: 'jQuery', src:require('../assets/techstack/jquery.png')},
    {name: 'React', src:require('../assets/techstack/react.png')},
    {name: 'Redux', src:require('../assets/techstack/redux.png')},
    {name: 'Php', src:require('../assets/techstack/php.png')},
    {name: 'Sql', src:require('../assets/techstack/sql.png')},
]

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