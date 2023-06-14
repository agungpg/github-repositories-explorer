import React, { ChangeEvent, useState } from 'react'
import { SearchFormType } from '../types'

const SearchForm = ({ onSubmit }: SearchFormType) => {
  const [username, setUsername] = useState('')
  const [isError, seIsError] = useState(false)
  const [usernameSearch, setUsernameSearch] = useState('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    seIsError(false)
    setUsername(e.target.value)
  }

  const onkeyup = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code == 'Enter') handleSubmit()
  }

  const handleSubmit = () => {
    if (username == '') {
      seIsError(true)
      return
    }
    onSubmit(username)
    setUsernameSearch(username)
  }
  console.log('isError: ', isError)
  return (
    <>
      <div>
        <input
          onKeyUp={onkeyup}
          onChange={onChange}
          placeholder='Enter username'
          className={`h-[40px] w-full bg-[#f1f1f1] p-[8px] text-[16px] border-[${
            isError ? '#FF5E5E' : '#ddd'
          }] rounded border-[2px]`}
        />
        {isError && <span className='text-[#FF5E5E]'>Please enter username for search user list</span>}
      </div>
      <button
        onClick={handleSubmit}
        className='h-[40px] w-full cursor-pointer bg-[#0CA6E9] text-center text-[16px] text-white'
      >
        Search
      </button>
      {usernameSearch != '' && <span>Showing users for "{usernameSearch}"</span>}
    </>
  )
}

export default React.memo(SearchForm)
