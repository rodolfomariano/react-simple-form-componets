import { SimpleButton } from "../components/SimpleButton";
import { FaBeer } from 'react-icons/fa';
import { InputWithIcon } from "../components/InputWithIcon";
import { GapWrap } from "../components/GapContainer/styles";

export default function HomePage() {
  return (
    <div>
      HomePage
      <SimpleButton
        title=""
        outlined
        size='medium'
        setBorderRadius='regular'
        colorScheme='violet'
        fontSize='medium'
      >
        <FaBeer />
        Beer
      </SimpleButton>

      <GapWrap
        direction='column'
        gapSize='medium'
      >
        <InputWithIcon
          type="email"
          placeholder="Email"
        />
        <InputWithIcon
          placeholder="Senha"
          type="password"
        />
        <InputWithIcon
          type="search"
          placeholder="Search"
          searchOnClick={() => console.log('test')}
        />

      </GapWrap>
    </div>
  )
}