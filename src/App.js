import React from 'react';
import './App.css';
import PortRoutes from './routes/routes';
import Navbar from './Navbar/Navbar';
import './Navbar/navbar.css';
import './global.css'
import { Text } from '@chakra-ui/react';
function App() {
	
return (
	<div id='parent'>
		<div>
		<Navbar/>
		<PortRoutes/>
		</div>
	<div className='Aboutme'>
		<div id='profile_card'>
			<div id='profile_pic'>
				<img src="https://avatars.githubusercontent.com/u/107461174?s=400&u=c8072d4e15a3869a29398b63a6e3be5b5f3edb40&v=4" alt='profile_pic'/>
				<p>
					An <u><b>Honest</b></u>, <u><b>Hardworking</b></u>, <u><b>Passionate</b></u>, and <u><b>Collaborative</b></u> developer who always tries to adapt to the environment. Proficient in <u><b>HTML</b></u>, <u><b>CSS</b></u>, <u><b>JavaScript</b></u> & <u><b>React</b></u>. Seeking a good environment to work as a developer.
				</p>
			</div>
		</div>
		<div id='greet'>
		<Text id='hi'
		bgGradient='linear(to-l, #7928CA, #FF0080)'
		bgClip='text'
		fontSize='6xl'
		fontWeight='extrabold'
		marginTop='100px'
		// border='1px solid black'
		display='flex'
		justifyContent='center'
		>
		Hi<img width='20%' height='20%' src="https://cdn3d.iconscout.com/3d/premium/thumb/waving-hand-gesture-6580697-5526763.png" alt='waving_hand'/> Visitors
		</Text>
		<Text id='takeAtur'
		bgGradient='linear(to-r, red.500, yellow.500)'
		bgClip='text'
		fontSize='4xl'
		fontWeight='extrabold'
		marginTop='20px'
		display='flex'
		gap='0px'
		justifyContent='center'
		>
		Take A Tour <img width='10%' height="10%" src='https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/backhand-index-pointing-down_1f447.png' alt='down_point'/>
		</Text>
		</div>
	</div>

	</div>
);
}

export default App;

