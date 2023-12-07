import { Profile } from './Profile/Profile';
import userData from '../data/user.json';

const { username, tag, location, avatar, stats } = userData

export const App = () => {
 
  return (   
    <Profile username={username} tag={tag } location={location} avatar={avatar} stats={stats} />  
  );
};
