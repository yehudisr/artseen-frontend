import { useEffect, useState } from 'react';
import {  Box, Text, Stack } from "@chakra-ui/react";

function Comment({ comment }){
    console.log(comment)
    return(
      <Box borderRadius="md" borderWidth="1px" >
            <Stack spacing={2}>
            <Text as="em" fontSize="sm">{comment.username}</Text>
             <Text fontSize="md">{comment.content}</Text>
             </Stack>
       </Box>
      
       
    )
}

export default Comment;