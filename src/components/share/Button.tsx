import React from 'react'

interface Props{
    children: string;
    type: string;
    isDisabled?: boolean;
    version?: string;

}
const Button: React.FC<Props> = ({ children, type, isDisabled, version }) => {
  return (
    <button disabled={isDisabled} className={`btn btn-${version}`}>
        {children}
    </button>
  )
}

export default Button
