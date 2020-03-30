import React from 'react'
import  { GridLoader } from 'react-spinners'
import { Box } from 'gestalt'

const Loader = ({ show }) => (
show && <Box
position="fixed"
dangerouslySetInlineStyle={{
 __style: {
  bottom: 800,
  left: '50%',
  transform: "translateX(-50%)"
 }
}}
>
<GridLoader color="darkgreen" size={20} margin="3px" />


</Box>
 
)
 
export default Loader

 

