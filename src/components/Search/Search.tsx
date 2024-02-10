import { memo } from 'react'

import CloseIcon from '@mui/icons-material/Close'
import SearchIcon from '@mui/icons-material/Search'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'

const Search = ({ searchValue, setSearchValue }: any) => {
  return (
    <div>
      <TextField
        label="Search..."
        type="text"
        size="small"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value)
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: 'black' }} />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <CloseIcon
                onClick={() => {
                  setSearchValue('')
                }}
                fontSize="small"
                sx={{ color: 'black', cursor: 'pointer', display: searchValue.length <= 0 ? 'none' : 'block' }}
              />
            </InputAdornment>
          )
        }}
        sx={{
          'position': 'absolute',
          'right': '10px',
          'top': '10px',
          '& label': { color: 'black' },
          '& input': { color: 'black' },
          '& label.Mui-focused': { color: 'black' },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'black'
            },
            '&:hover fieldset': {
              borderColor: 'black'
            },
            '&.Mui-focused fieldset': {
              borderColor: 'black'
            }
          }
        }}
      />
    </div>
  )
}

export default memo(Search)
