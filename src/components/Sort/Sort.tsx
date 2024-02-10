import { useState, memo } from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

const breweryTypes = [
  { value: 'micro', label: 'Micro' },
  { value: 'nano', label: 'Nano' },
  { value: 'regional', label: 'Regional' },
  { value: 'brewpub', label: 'Brewpub' },
  { value: 'large', label: 'Large' },
  { value: 'planning', label: 'Planning' },
  { value: 'bar', label: 'Bar' },
  { value: 'contract', label: 'Contract' },
  { value: 'proprietor', label: 'Proprietor' },
  { value: 'closed', label: 'Closed' }
]

const Sort = ({ onSelectType }: any) => {
  const [type, setType] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string)
    onSelectType(event.target.value as string)
  }

  return (
    <Box sx={{ position: 'absolute', left: '10px', top: '90px' }}>
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          label="Type"
          onChange={handleChange}
          MenuProps={{ disableScrollLock: true }}
        >
          {breweryTypes.map((breweryType) => (
            <MenuItem key={breweryType.value} value={breweryType.value}>
              {breweryType.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default memo(Sort)
