import { atom, selector } from 'recoil';
import TextInput from './components/TextInput';
import CharactorCount from './components/CharactorCount';

export const textState = atom({
  key: 'textState',
  default: '',
})

export const charCountState = selector({
  key: 'charCountState',
  get: (({get}) => {
    const test = get(textState)

    return test.length;
  })
})

function App() {
  return (
    <div className="App">
      <TextInput />
      <CharactorCount />
    </div>
  );
}
 
export default App;
