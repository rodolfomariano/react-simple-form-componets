import { useState, InputHTMLAttributes } from "react"

import { } from "react-icons/fa"
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineMail, AiOutlineLock, AiOutlineUser, AiOutlinePhone, AiOutlineSearch } from 'react-icons/ai'

import {
  InputContainer,
  LeftIconContainer,
  Input,
  RightIconContainer
} from './styles'

interface InputWithIconProps extends InputHTMLAttributes<HTMLInputElement> {
  type: 'email' | 'password' | 'user' | 'tel' | 'search'
  placeholder?: string
  searchOnClick?: () => void
  inputSize?: 'default' | 'full'
  inputBackground?: string
  inputColor?: string
  setBorderRadius?: 'none' | 'small' | 'regular' | 'medium' | 'large' | 'full'
}

export function InputWithIcon({ type, placeholder, searchOnClick, inputSize, inputBackground, setBorderRadius, inputColor, ...rest }: InputWithIconProps) {
  const [passwordIsVisible, setPasswordIsVisible] = useState<boolean>(false)

  return (
    <InputContainer
      inputSize={inputSize}
      style={{
        backgroundColor: inputBackground,
        color: inputColor
      }}
      setBorderRadius={setBorderRadius}
    >
      {type !== 'search' && (
        <LeftIconContainer>
          {type === 'email' && <AiOutlineMail />}
          {type === 'password' && <AiOutlineLock />}
          {type === 'user' && <AiOutlineUser />}
          {type === 'tel' && <AiOutlinePhone />}
        </LeftIconContainer>
      )}

      <Input
        type={passwordIsVisible === true && type === 'password'
          ? 'text'
          : passwordIsVisible === false && type === 'password'
            ? 'password'
            : type
        }
        placeholder={placeholder}
        {...rest}
      />

      {type === 'password' && (
        <RightIconContainer
          onClick={() => setPasswordIsVisible(!passwordIsVisible)}
        >
          {passwordIsVisible
            ? <AiOutlineEyeInvisible />
            : <AiOutlineEye />
          }

        </RightIconContainer>
      )}

      {type === 'search' && (
        <RightIconContainer
          onClick={searchOnClick}
        >
          <AiOutlineSearch />
        </RightIconContainer>
      )}
    </InputContainer>
  )
}

InputWithIcon.defaultProps = {
  inputSize: 'default',
  inputBackground: '#F1F1F1',
  inputColor: '#4F4F4F',
  setBorderRadius: 'regular'
}